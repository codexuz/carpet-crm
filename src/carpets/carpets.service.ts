import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCarpetDto, UpdateCarpetDto, CarpetFilterDto } from './dto/carpet.dto';

@Injectable()
export class CarpetsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCarpetDto) {
    // Check if code already exists
    const existing = await this.prisma.carpet.findUnique({
      where: { code: dto.code },
    });

    if (existing) {
      throw new BadRequestException('Bu raqamli gilam allaqachon mavjud');
    }

    const area = dto.width * dto.height;

    return this.prisma.carpet.create({
      data: {
        ...dto,
        area,
      },
    });
  }

  async findAll(filters: CarpetFilterDto) {
    const where: any = {};

    if (filters.pattern) {
      where.pattern = { contains: filters.pattern, mode: 'insensitive' };
    }

    if (filters.color) {
      where.color = { contains: filters.color, mode: 'insensitive' };
    }

    if (filters.material) {
      where.material = { contains: filters.material, mode: 'insensitive' };
    }

    if (filters.isSold !== undefined) {
      where.isSold = filters.isSold === 'true';
    }

    if (filters.search) {
      where.OR = [
        { code: { contains: filters.search, mode: 'insensitive' } },
        { pattern: { contains: filters.search, mode: 'insensitive' } },
        { color: { contains: filters.search, mode: 'insensitive' } },
        { material: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    return this.prisma.carpet.findMany({
      where,
      include: {
        saleItem: {
          include: {
            sale: {
              include: {
                customer: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const carpet = await this.prisma.carpet.findUnique({
      where: { id },
      include: {
        saleItem: {
          include: {
            sale: {
              include: {
                customer: true,
                seller: {
                  select: {
                    id: true,
                    name: true,
                    phone: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!carpet) {
      throw new NotFoundException('Gilam topilmadi');
    }

    return carpet;
  }

  async findByCode(code: string) {
    const carpet = await this.prisma.carpet.findUnique({
      where: { code },
    });

    if (!carpet) {
      throw new NotFoundException('Gilam topilmadi');
    }

    return carpet;
  }

  async update(id: string, dto: UpdateCarpetDto) {
    const carpet = await this.findOne(id);

    const updateData: any = { ...dto };

    if (dto.width || dto.height) {
      const width = dto.width ?? carpet.width;
      const height = dto.height ?? carpet.height;
      updateData.area = width * height;
    }

    return this.prisma.carpet.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: string) {
    const carpet = await this.findOne(id);

    if (carpet.isSold) {
      throw new BadRequestException('Sotilgan gilamni o\'chirish mumkin emas');
    }

    return this.prisma.carpet.delete({
      where: { id },
    });
  }

  async getStats() {
    const [total, sold, unsold, totalValue, totalCost] = await Promise.all([
      this.prisma.carpet.count(),
      this.prisma.carpet.count({ where: { isSold: true } }),
      this.prisma.carpet.count({ where: { isSold: false } }),
      this.prisma.carpet.aggregate({
        where: { isSold: false },
        _sum: { sellPrice: true },
      }),
      this.prisma.carpet.aggregate({
        where: { isSold: false },
        _sum: { costPrice: true },
      }),
    ]);

    return {
      total,
      sold,
      unsold,
      totalValue: totalValue._sum.sellPrice || 0,
      totalCost: totalCost._sum.costPrice || 0,
      potentialProfit: (totalValue._sum.sellPrice || 0) - (totalCost._sum.costPrice || 0),
    };
  }
}
