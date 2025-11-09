import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto, AddPaymentDto } from './dto/sale.dto';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateSaleDto) {
    // Validate all carpets exist and are not sold
    const carpets = await this.prisma.carpet.findMany({
      where: {
        id: { in: dto.items.map((item) => item.carpetId) },
      },
    });

    if (carpets.length !== dto.items.length) {
      throw new BadRequestException('Ba\'zi gilamlar topilmadi');
    }

    const soldCarpet = carpets.find((c) => c.isSold);
    if (soldCarpet) {
      throw new BadRequestException(`Gilam #${soldCarpet.code} allaqachon sotilgan`);
    }

    // Calculate totals
    let totalPrice = 0;
    let totalCost = 0;

    const itemsData = dto.items.map((item) => {
      const carpet = carpets.find((c) => c.id === item.carpetId);
      
      if (!carpet) {
        throw new BadRequestException('Gilam topilmadi');
      }
      
      totalPrice += item.price;
      totalCost += carpet.costPrice;

      return {
        carpetId: item.carpetId,
        price: item.price,
        cost: carpet.costPrice,
        profit: item.price - carpet.costPrice,
      };
    });

    const profit = totalPrice - totalCost;
    const debtAmount = totalPrice - dto.paidAmount;

    // Create sale in transaction
    return this.prisma.$transaction(async (tx) => {
      // Create sale
      const sale = await tx.sale.create({
        data: {
          salePointId: dto.salePointId,
          sellerId: dto.sellerId,
          customerId: dto.customerId,
          totalPrice,
          totalCost,
          profit,
          paidAmount: dto.paidAmount,
          debtAmount,
          items: {
            create: itemsData,
          },
        },
        include: {
          items: {
            include: {
              carpet: true,
            },
          },
          seller: {
            select: {
              id: true,
              name: true,
              phone: true,
            },
          },
          customer: true,
          salePoint: true,
        },
      });

      // Mark carpets as sold
      await tx.carpet.updateMany({
        where: { id: { in: dto.items.map((item) => item.carpetId) } },
        data: {
          isSold: true,
          soldAt: new Date(),
        },
      });

      // Create customer debt record if there's debt
      if (dto.customerId && debtAmount > 0) {
        await tx.customerDebt.create({
          data: {
            customerId: dto.customerId,
            amount: debtAmount,
            note: `Sotuv #${sale.id.substring(0, 8)}`,
          },
        });
      }

      // Create initial payment record if customer paid something
      if (dto.customerId && dto.paidAmount > 0) {
        await tx.customerDebt.create({
          data: {
            customerId: dto.customerId,
            amount: -dto.paidAmount,
            note: `Sotuv to'lovi #${sale.id.substring(0, 8)}`,
          },
        });
      }

      // Calculate seller profit (example: 10% of profit)
      if (dto.sellerId && profit > 0) {
        const sellerProfitAmount = Math.floor(profit * 0.1);
        const openedPercent = (dto.paidAmount / totalPrice) * 100;

        await tx.sellerProfit.create({
          data: {
            sellerId: dto.sellerId,
            saleId: sale.id,
            amount: sellerProfitAmount,
            openedPercent,
          },
        });
      }

      return sale;
    });
  }

  async findAll(filters?: { salePointId?: string; sellerId?: string; customerId?: string }) {
    const where: any = {};

    if (filters?.salePointId) {
      where.salePointId = filters.salePointId;
    }

    if (filters?.sellerId) {
      where.sellerId = filters.sellerId;
    }

    if (filters?.customerId) {
      where.customerId = filters.customerId;
    }

    return this.prisma.sale.findMany({
      where,
      include: {
        items: {
          include: {
            carpet: true,
          },
        },
        seller: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        customer: true,
        salePoint: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            carpet: true,
          },
        },
        seller: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        customer: {
          include: {
            debts: {
              orderBy: { createdAt: 'desc' },
            },
          },
        },
        salePoint: true,
        sellerProfits: true,
      },
    });

    if (!sale) {
      throw new NotFoundException('Sotuv topilmadi');
    }

    return sale;
  }

  async addPayment(id: string, dto: AddPaymentDto) {
    const sale = await this.findOne(id);

    if (!sale.customerId) {
      throw new BadRequestException('Bu sotuvda mijoz mavjud emas');
    }

    if (sale.debtAmount <= 0) {
      throw new BadRequestException('Bu sotuvda qarz yo\'q');
    }

    if (dto.amount > sale.debtAmount) {
      throw new BadRequestException('To\'lov summasi qarzdan katta bo\'lishi mumkin emas');
    }

    return this.prisma.$transaction(async (tx) => {
      // Update sale debt
      await tx.sale.update({
        where: { id },
        data: {
          paidAmount: { increment: dto.amount },
          debtAmount: { decrement: dto.amount },
        },
      });

      // Create debt record
      await tx.customerDebt.create({
        data: {
          customerId: sale.customerId!,
          amount: -dto.amount,
          note: dto.note || `To'lov #${sale.id.substring(0, 8)}`,
        },
      });

      // Update seller profit percentage if exists
      if (sale.sellerId) {
        const newPaidAmount = sale.paidAmount + dto.amount;
        const newOpenedPercent = (newPaidAmount / sale.totalPrice) * 100;

        await tx.sellerProfit.updateMany({
          where: { saleId: id },
          data: {
            openedPercent: newOpenedPercent,
          },
        });
      }

      return this.findOne(id);
    });
  }

  async getStats() {
    const [totalSales, totalRevenue, totalProfit, totalDebt] = await Promise.all([
      this.prisma.sale.count(),
      this.prisma.sale.aggregate({
        _sum: { totalPrice: true },
      }),
      this.prisma.sale.aggregate({
        _sum: { profit: true },
      }),
      this.prisma.sale.aggregate({
        _sum: { debtAmount: true },
      }),
    ]);

    return {
      totalSales,
      totalRevenue: totalRevenue._sum.totalPrice || 0,
      totalProfit: totalProfit._sum.profit || 0,
      totalDebt: totalDebt._sum.debtAmount || 0,
    };
  }
}
