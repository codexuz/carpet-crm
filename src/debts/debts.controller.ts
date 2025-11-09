import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { DebtsService } from './debts.service';
import { CreateDebtDto } from './dto/debt.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('debts')
@UseGuards(JwtAuthGuard)
export class DebtsController {
  constructor(private readonly debtsService: DebtsService) {}

  @Post()
  create(@Body() dto: CreateDebtDto) {
    return this.debtsService.create(dto);
  }

  @Get()
  findAll(@Query('customerId') customerId?: string) {
    return this.debtsService.findAll(customerId);
  }

  @Get('stats')
  getDebtStats() {
    return this.debtsService.getDebtStats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.debtsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.debtsService.remove(id);
  }
}
