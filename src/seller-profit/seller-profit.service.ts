import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SellerProfitService {
  constructor(private prisma: PrismaService) {}

  async findAll(sellerId?: string) {
    const where: any = {};

    if (sellerId) {
      where.sellerId = sellerId;
    }

    return this.prisma.sellerProfit.findMany({
      where,
      include: {
        seller: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        sale: {
          include: {
            items: {
              include: {
                carpet: true,
              },
            },
            customer: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const profit = await this.prisma.sellerProfit.findUnique({
      where: { id },
      include: {
        seller: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        sale: {
          include: {
            items: {
              include: {
                carpet: true,
              },
            },
            customer: true,
          },
        },
      },
    });

    if (!profit) {
      throw new NotFoundException('Sotuvchi ulushi topilmadi');
    }

    return profit;
  }

  async getSellerStats(sellerId: string) {
    const [totalProfits, totalAmount, avgPercent] = await Promise.all([
      this.prisma.sellerProfit.count({ where: { sellerId } }),
      this.prisma.sellerProfit.aggregate({
        where: { sellerId },
        _sum: { amount: true },
      }),
      this.prisma.sellerProfit.aggregate({
        where: { sellerId },
        _avg: { openedPercent: true },
      }),
    ]);

    const recentProfits = await this.prisma.sellerProfit.findMany({
      where: { sellerId },
      include: {
        sale: {
          include: {
            items: true,
            customer: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    return {
      totalProfits,
      totalAmount: totalAmount._sum.amount || 0,
      avgOpenedPercent: avgPercent._avg.openedPercent || 0,
      recentProfits,
    };
  }

  async getOverallStats() {
    const [totalRecords, totalAmount, totalSellers] = await Promise.all([
      this.prisma.sellerProfit.count(),
      this.prisma.sellerProfit.aggregate({
        _sum: { amount: true },
      }),
      this.prisma.sellerProfit.groupBy({
        by: ['sellerId'],
        _sum: { amount: true },
      }),
    ]);

    const topSellers = totalSellers
      .sort((a, b) => (b._sum.amount || 0) - (a._sum.amount || 0))
      .slice(0, 5);

    const topSellersWithDetails = await Promise.all(
      topSellers.map(async (seller) => {
        const user = await this.prisma.user.findUnique({
          where: { id: seller.sellerId },
          select: { id: true, name: true, phone: true },
        });
        return {
          seller: user,
          totalEarned: seller._sum.amount || 0,
        };
      }),
    );

    return {
      totalRecords,
      totalAmount: totalAmount._sum.amount || 0,
      totalSellers: totalSellers.length,
      topSellers: topSellersWithDetails,
    };
  }
}
