import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Carpet Store ERP API - Welcome! Visit /health for health check.';
  }
}
