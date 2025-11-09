import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { CarpetsService } from './carpets.service';
import { CreateCarpetDto, UpdateCarpetDto, CarpetFilterDto } from './dto/carpet.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../../generated/client';

@ApiTags('carpets')
@Controller('carpets')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class CarpetsController {
  constructor(private readonly carpetsService: CarpetsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Add new carpet to inventory (Admin only)' })
  @ApiResponse({ status: 201, description: 'Carpet created successfully' })
  @ApiResponse({ status: 400, description: 'Carpet code already exists' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin role required' })
  create(@Body() dto: CreateCarpetDto) {
    return this.carpetsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all carpets with optional filters' })
  @ApiResponse({ status: 200, description: 'List of carpets' })
  @ApiQuery({ name: 'pattern', required: false, description: 'Filter by pattern' })
  @ApiQuery({ name: 'color', required: false, description: 'Filter by color' })
  @ApiQuery({ name: 'material', required: false, description: 'Filter by material' })
  @ApiQuery({ name: 'isSold', required: false, description: 'Filter by sold status (true/false)' })
  @ApiQuery({ name: 'search', required: false, description: 'Search in code, pattern, color, material' })
  findAll(@Query() filters: CarpetFilterDto) {
    return this.carpetsService.findAll(filters);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get inventory statistics' })
  @ApiResponse({ status: 200, description: 'Inventory statistics' })
  getStats() {
    return this.carpetsService.getStats();
  }

  @Get('code/:code')
  @ApiOperation({ summary: 'Get carpet by code' })
  @ApiResponse({ status: 200, description: 'Carpet found' })
  @ApiResponse({ status: 404, description: 'Carpet not found' })
  findByCode(@Param('code') code: string) {
    return this.carpetsService.findByCode(code);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get carpet by ID' })
  @ApiResponse({ status: 200, description: 'Carpet found' })
  @ApiResponse({ status: 404, description: 'Carpet not found' })
  findOne(@Param('id') id: string) {
    return this.carpetsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Update carpet (Admin only)' })
  @ApiResponse({ status: 200, description: 'Carpet updated successfully' })
  @ApiResponse({ status: 404, description: 'Carpet not found' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin role required' })
  update(@Param('id') id: string, @Body() dto: UpdateCarpetDto) {
    return this.carpetsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete carpet (Admin only)' })
  @ApiResponse({ status: 200, description: 'Carpet deleted successfully' })
  @ApiResponse({ status: 400, description: 'Cannot delete sold carpet' })
  @ApiResponse({ status: 404, description: 'Carpet not found' })
  @ApiResponse({ status: 403, description: 'Forbidden - Admin role required' })
  remove(@Param('id') id: string) {
    return this.carpetsService.remove(id);
  }
}
