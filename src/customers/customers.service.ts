import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: dto,
    });
  }

  async findAll(search?: string) {
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
      ];
    }

    return this.prisma.customer.findMany({
      where,
      include: {
        _count: {
          select: {
            sales: true,
            debts: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      include: {
        sales: {
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
              },
            },
            salePoint: true,
          },
          orderBy: { createdAt: 'desc' },
        },
        debts: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!customer) {
      throw new NotFoundException('Mijoz topilmadi');
    }

    return customer;
  }

  async update(id: string, dto: UpdateCustomerDto) {
    await this.findOne(id);

    return this.prisma.customer.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.customer.delete({
      where: { id },
    });
  }

  async getDebtSummary(id: string) {
    await this.findOne(id);

    const debts = await this.prisma.customerDebt.findMany({
      where: { customerId: id },
      orderBy: { createdAt: 'asc' },
    });

    let totalDebt = 0;
    let totalPaid = 0;

    debts.forEach((debt) => {
      if (debt.amount > 0) {
        totalDebt += debt.amount;
      } else {
        totalPaid += Math.abs(debt.amount);
      }
    });

    const balance = totalDebt - totalPaid;

    return {
      totalDebt,
      totalPaid,
      balance,
      transactions: debts,
    };
  }

  async getTopDebtors(limit: number = 10) {
    const customers = await this.prisma.customer.findMany({
      include: {
        debts: true,
        sales: {
          select: {
            debtAmount: true,
          },
        },
      },
    });

    const customersWithDebt = customers
      .map((customer) => {
        const totalDebt = customer.sales.reduce((sum, sale) => sum + sale.debtAmount, 0);
        return {
          id: customer.id,
          name: customer.name,
          phone: customer.phone,
          totalDebt,
        };
      })
      .filter((c) => c.totalDebt > 0)
      .sort((a, b) => b.totalDebt - a.totalDebt)
      .slice(0, limit);

    return customersWithDebt;
  }
}
