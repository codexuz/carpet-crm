import { Module } from '@nestjs/common';
import { CarpetsService } from './carpets.service';
import { CarpetsController } from './carpets.controller';

@Module({
  controllers: [CarpetsController],
  providers: [CarpetsService],
  exports: [CarpetsService],
})
export class CarpetsModule {}
