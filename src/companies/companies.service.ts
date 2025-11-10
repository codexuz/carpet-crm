import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCompanyDto) {
    return this.prisma.company.create({
      data: dto,
    });
  }

  async findAll(search?: string, isActive?: boolean) {
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    return this.prisma.company.findMany({
      where,
      include: {
        _count: {
          select: {
            carpets: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      include: {
        carpets: {
          include: {
            unit: true,
          },
          orderBy: { createdAt: 'desc' },
          take: 50,
        },
        _count: {
          select: {
            carpets: true,
          },
        },
      },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    return company;
  }

  async update(id: string, dto: UpdateCompanyDto) {
    await this.findOne(id);

    return this.prisma.company.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    // Check if company has carpets
    const carpetsCount = await this.prisma.carpet.count({
      where: { companyId: id },
    });

    if (carpetsCount > 0) {
      throw new ConflictException(
        `Cannot delete company with ${carpetsCount} associated carpets. Remove the association first.`,
      );
    }

    return this.prisma.company.delete({
      where: { id },
    });
  }

  async getStatistics(id: string) {
    await this.findOne(id);

    const carpets = await this.prisma.carpet.findMany({
      where: { companyId: id },
    });

    const totalCarpets = carpets.length;
    const soldCarpets = carpets.filter((c) => c.isSold).length;
    const availableCarpets = totalCarpets - soldCarpets;

    const totalInventoryValue = carpets
      .filter((c) => !c.isSold)
      .reduce((sum, c) => sum + c.costPrice, 0);

    const totalPotentialRevenue = carpets
      .filter((c) => !c.isSold)
      .reduce((sum, c) => sum + c.sellPrice, 0);

    const totalSoldValue = carpets
      .filter((c) => c.isSold)
      .reduce((sum, c) => sum + c.sellPrice, 0);

    return {
      totalCarpets,
      soldCarpets,
      availableCarpets,
      totalInventoryValue,
      totalPotentialRevenue,
      totalSoldValue,
      potentialProfit: totalPotentialRevenue - totalInventoryValue,
    };
  }
}
