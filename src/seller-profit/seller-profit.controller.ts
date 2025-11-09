import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { SellerProfitService } from './seller-profit.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('seller-profit')
@Controller('seller-profit')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class SellerProfitController {
  constructor(private readonly sellerProfitService: SellerProfitService) {}

  @Get()
  @ApiOperation({ summary: 'Get all seller profit records' })
  @ApiResponse({ status: 200, description: 'List of profits' })
  @ApiQuery({ name: 'sellerId', required: false, description: 'Filter by seller' })
  findAll(@Query('sellerId') sellerId?: string) {
    return this.sellerProfitService.findAll(sellerId);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get overall commission statistics' })
  @ApiResponse({ status: 200, description: 'Overall statistics' })
  getOverallStats() {
    return this.sellerProfitService.getOverallStats();
  }

  @Get('seller/:sellerId/stats')
  @ApiOperation({ summary: 'Get seller commission statistics' })
  @ApiResponse({ status: 200, description: 'Seller statistics' })
  getSellerStats(@Param('sellerId') sellerId: string) {
    return this.sellerProfitService.getSellerStats(sellerId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get profit record by ID' })
  @ApiResponse({ status: 200, description: 'Profit found' })
  @ApiResponse({ status: 404, description: 'Profit not found' })
  findOne(@Param('id') id: string) {
    return this.sellerProfitService.findOne(id);
  }
}
