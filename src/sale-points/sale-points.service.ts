import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalePointDto, UpdateSalePointDto } from './dto/sale-point.dto';

@Injectable()
export class SalePointsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateSalePointDto) {
    return this.prisma.salePoint.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.salePoint.findMany({
      include: {
        _count: {
          select: {
            sales: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const salePoint = await this.prisma.salePoint.findUnique({
      where: { id },
      include: {
        sales: {
          include: {
            seller: {
              select: {
                id: true,
                name: true,
              },
            },
            customer: {
              select: {
                id: true,
                name: true,
              },
            },
            items: true,
          },
          orderBy: { createdAt: 'desc' },
          take: 20,
        },
        _count: {
          select: {
            sales: true,
          },
        },
      },
    });

    if (!salePoint) {
      throw new NotFoundException('Sotuv nuqtasi topilmadi');
    }

    return salePoint;
  }

  async update(id: string, dto: UpdateSalePointDto) {
    await this.findOne(id);

    return this.prisma.salePoint.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.salePoint.delete({
      where: { id },
    });
  }

  async getStats(id: string) {
    await this.findOne(id);

    const [totalSales, totalRevenue, totalProfit] = await Promise.all([
      this.prisma.sale.count({ where: { salePointId: id } }),
      this.prisma.sale.aggregate({
        where: { salePointId: id },
        _sum: { totalPrice: true },
      }),
      this.prisma.sale.aggregate({
        where: { salePointId: id },
        _sum: { profit: true },
      }),
    ]);

    return {
      totalSales,
      totalRevenue: totalRevenue._sum.totalPrice || 0,
      totalProfit: totalProfit._sum.profit || 0,
    };
  }
}
