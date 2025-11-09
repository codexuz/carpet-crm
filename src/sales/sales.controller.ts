import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto, AddPaymentDto } from './dto/sale.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('sales')
@UseGuards(JwtAuthGuard)
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() dto: CreateSaleDto) {
    return this.salesService.create(dto);
  }

  @Get()
  findAll(
    @Query('salePointId') salePointId?: string,
    @Query('sellerId') sellerId?: string,
    @Query('customerId') customerId?: string,
  ) {
    return this.salesService.findAll({ salePointId, sellerId, customerId });
  }

  @Get('stats')
  getStats() {
    return this.salesService.getStats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Post(':id/payment')
  addPayment(@Param('id') id: string, @Body() dto: AddPaymentDto) {
    return this.salesService.addPayment(id, dto);
  }
}
