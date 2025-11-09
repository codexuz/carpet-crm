import { Module } from '@nestjs/common';
import { SalePointsService } from './sale-points.service';
import { SalePointsController } from './sale-points.controller';

@Module({
  controllers: [SalePointsController],
  providers: [SalePointsService],
  exports: [SalePointsService],
})
export class SalePointsModule {}
