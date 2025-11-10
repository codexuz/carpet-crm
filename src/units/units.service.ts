import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUnitDto, UpdateUnitDto } from './dto/unit.dto';

@Injectable()
export class UnitsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUnitDto) {
    // Check if unit with same name or symbol already exists
    const existing = await this.prisma.unit.findFirst({
      where: {
        OR: [{ name: dto.name }, { symbol: dto.symbol }],
      },
    });

    if (existing) {
      throw new ConflictException(
        'Unit with this name or symbol already exists',
      );
    }

    return this.prisma.unit.create({
      data: dto,
    });
  }

  async findAll(search?: string, isActive?: boolean) {
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { symbol: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    return this.prisma.unit.findMany({
      where,
      include: {
        _count: {
          select: {
            carpets: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    const unit = await this.prisma.unit.findUnique({
      where: { id },
      include: {
        carpets: {
          include: {
            company: true,
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

    if (!unit) {
      throw new NotFoundException('Unit not found');
    }

    return unit;
  }

  async update(id: string, dto: UpdateUnitDto) {
    await this.findOne(id);

    // Check if unit with same name or symbol already exists (excluding current)
    if (dto.name || dto.symbol) {
      const conditions: any[] = [];
      if (dto.name) conditions.push({ name: dto.name });
      if (dto.symbol) conditions.push({ symbol: dto.symbol });

      const existing = await this.prisma.unit.findFirst({
        where: {
          OR: conditions,
          NOT: { id },
        },
      });

      if (existing) {
        throw new ConflictException(
          'Unit with this name or symbol already exists',
        );
      }
    }

    return this.prisma.unit.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    // Check if unit has carpets
    const carpetsCount = await this.prisma.carpet.count({
      where: { unitId: id },
    });

    if (carpetsCount > 0) {
      throw new ConflictException(
        `Cannot delete unit with ${carpetsCount} associated carpets. Remove the association first.`,
      );
    }

    return this.prisma.unit.delete({
      where: { id },
    });
  }

  async getStatistics(id: string) {
    await this.findOne(id);

    const carpets = await this.prisma.carpet.findMany({
      where: { unitId: id },
    });

    const totalCarpets = carpets.length;
    const soldCarpets = carpets.filter((c) => c.isSold).length;
    const availableCarpets = totalCarpets - soldCarpets;

    const totalArea = carpets.reduce((sum, c) => sum + c.area, 0);
    const soldArea = carpets
      .filter((c) => c.isSold)
      .reduce((sum, c) => sum + c.area, 0);
    const availableArea = totalArea - soldArea;

    return {
      totalCarpets,
      soldCarpets,
      availableCarpets,
      totalArea,
      soldArea,
      availableArea,
    };
  }
}
