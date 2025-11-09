import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDebtDto } from './dto/debt.dto';

@Injectable()
export class DebtsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateDebtDto) {
    // Verify customer exists
    const customer = await this.prisma.customer.findUnique({
      where: { id: dto.customerId },
    });

    if (!customer) {
      throw new NotFoundException('Mijoz topilmadi');
    }

    return this.prisma.customerDebt.create({
      data: dto,
      include: {
        customer: true,
      },
    });
  }

  async findAll(customerId?: string) {
    const where: any = {};

    if (customerId) {
      where.customerId = customerId;
    }

    return this.prisma.customerDebt.findMany({
      where,
      include: {
        customer: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const debt = await this.prisma.customerDebt.findUnique({
      where: { id },
      include: {
        customer: true,
      },
    });

    if (!debt) {
      throw new NotFoundException('Qarz yozuvi topilmadi');
    }

    return debt;
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.customerDebt.delete({
      where: { id },
    });
  }

  async getDebtStats() {
    const [totalDebtRecords, positiveDebts, payments] = await Promise.all([
      this.prisma.customerDebt.count(),
      this.prisma.customerDebt.aggregate({
        where: { amount: { gt: 0 } },
        _sum: { amount: true },
      }),
      this.prisma.customerDebt.aggregate({
        where: { amount: { lt: 0 } },
        _sum: { amount: true },
      }),
    ]);

    const totalDebt = positiveDebts._sum.amount || 0;
    const totalPayments = Math.abs(payments._sum.amount || 0);
    const balance = totalDebt - totalPayments;

    return {
      totalDebtRecords,
      totalDebt,
      totalPayments,
      balance,
    };
  }
}
