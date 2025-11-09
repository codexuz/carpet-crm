import { Module } from '@nestjs/common';
import { SellerProfitService } from './seller-profit.service';
import { SellerProfitController } from './seller-profit.controller';

@Module({
  controllers: [SellerProfitController],
  providers: [SellerProfitService],
  exports: [SellerProfitService],
})
export class SellerProfitModule {}
