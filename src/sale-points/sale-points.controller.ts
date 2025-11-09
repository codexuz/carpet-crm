import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SalePointsService } from './sale-points.service';
import { CreateSalePointDto, UpdateSalePointDto } from './dto/sale-point.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../../generated/client';

@Controller('sale-points')
@UseGuards(JwtAuthGuard)
export class SalePointsController {
  constructor(private readonly salePointsService: SalePointsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  create(@Body() dto: CreateSalePointDto) {
    return this.salePointsService.create(dto);
  }

  @Get()
  findAll() {
    return this.salePointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salePointsService.findOne(id);
  }

  @Get(':id/stats')
  getStats(@Param('id') id: string) {
    return this.salePointsService.getStats(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateSalePointDto) {
    return this.salePointsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.salePointsService.remove(id);
  }
}
