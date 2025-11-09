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
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { SalePointsService } from './sale-points.service';
import { CreateSalePointDto, UpdateSalePointDto } from './dto/sale-point.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../../generated/client';

@ApiTags('sale-points')
@Controller('sale-points')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class SalePointsController {
  constructor(private readonly salePointsService: SalePointsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Create sale point (Admin only)' })
  @ApiResponse({ status: 201, description: 'Sale point created' })
  create(@Body() dto: CreateSalePointDto) {
    return this.salePointsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sale points' })
  @ApiResponse({ status: 200, description: 'List of sale points' })
  findAll() {
    return this.salePointsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sale point by ID' })
  @ApiResponse({ status: 200, description: 'Sale point found' })
  @ApiResponse({ status: 404, description: 'Sale point not found' })
  findOne(@Param('id') id: string) {
    return this.salePointsService.findOne(id);
  }

  @Get(':id/stats')
  @ApiOperation({ summary: 'Get sale point statistics' })
  @ApiResponse({ status: 200, description: 'Sale point statistics' })
  getStats(@Param('id') id: string) {
    return this.salePointsService.getStats(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Update sale point (Admin only)' })
  @ApiResponse({ status: 200, description: 'Sale point updated' })
  update(@Param('id') id: string, @Body() dto: UpdateSalePointDto) {
    return this.salePointsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete sale point (Admin only)' })
  @ApiResponse({ status: 200, description: 'Sale point deleted' })
  remove(@Param('id') id: string) {
    return this.salePointsService.remove(id);
  }
}
