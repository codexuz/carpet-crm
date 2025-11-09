import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common';
import { SellerProfitService } from './seller-profit.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('seller-profit')
@UseGuards(JwtAuthGuard)
export class SellerProfitController {
  constructor(private readonly sellerProfitService: SellerProfitService) {}

  @Get()
  findAll(@Query('sellerId') sellerId?: string) {
    return this.sellerProfitService.findAll(sellerId);
  }

  @Get('stats')
  getOverallStats() {
    return this.sellerProfitService.getOverallStats();
  }

  @Get('seller/:sellerId/stats')
  getSellerStats(@Param('sellerId') sellerId: string) {
    return this.sellerProfitService.getSellerStats(sellerId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerProfitService.findOne(id);
  }
}
