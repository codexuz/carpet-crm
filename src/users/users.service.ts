import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async findAll(role?: string) {
    return this.prisma.user.findMany({
      where: role ? { role: role as any } : undefined,
      select: {
        id: true,
        name: true,
        phone: true,
        role: true,
        createdAt: true,
        _count: {
          select: {
            sales: true,
            sellerCuts: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        phone: true,
        role: true,
        createdAt: true,
        _count: {
          select: {
            sales: true,
            sellerCuts: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('Foydalanuvchi topilmadi');
    }

    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findOne(id);

    const updateData: any = { ...dto };
    
    if (dto.password) {
      updateData.password = await bcrypt.hash(dto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.user.delete({
      where: { id },
      select: {
        id: true,
        name: true,
        phone: true,
        role: true,
      },
    });
  }

  async getSellerStats(id: string) {
    await this.findOne(id);

    const [sales, totalProfit, totalCommission] = await Promise.all([
      this.prisma.sale.findMany({
        where: { sellerId: id },
        include: {
          items: {
            include: {
              carpet: true,
            },
          },
          customer: true,
          salePoint: true,
        },
        orderBy: { createdAt: 'desc' },
        take: 10,
      }),
      this.prisma.sale.aggregate({
        where: { sellerId: id },
        _sum: { profit: true },
      }),
      this.prisma.sellerProfit.aggregate({
        where: { sellerId: id },
        _sum: { amount: true },
      }),
    ]);

    return {
      totalSales: sales.length,
      totalProfit: totalProfit._sum.profit || 0,
      totalCommission: totalCommission._sum.amount || 0,
      recentSales: sales,
    };
  }
}
