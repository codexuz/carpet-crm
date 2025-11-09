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
import { CarpetsService } from './carpets.service';
import { CreateCarpetDto, UpdateCarpetDto, CarpetFilterDto } from './dto/carpet.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../../generated/client';

@Controller('carpets')
@UseGuards(JwtAuthGuard)
export class CarpetsController {
  constructor(private readonly carpetsService: CarpetsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  create(@Body() dto: CreateCarpetDto) {
    return this.carpetsService.create(dto);
  }

  @Get()
  findAll(@Query() filters: CarpetFilterDto) {
    return this.carpetsService.findAll(filters);
  }

  @Get('stats')
  getStats() {
    return this.carpetsService.getStats();
  }

  @Get('code/:code')
  findByCode(@Param('code') code: string) {
    return this.carpetsService.findByCode(code);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carpetsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateCarpetDto) {
    return this.carpetsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.carpetsService.remove(id);
  }
}
