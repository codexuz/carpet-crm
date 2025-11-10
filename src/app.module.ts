import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CarpetsModule } from './carpets/carpets.module';
import { SalePointsModule } from './sale-points/sale-points.module';
import { SalesModule } from './sales/sales.module';
import { CustomersModule } from './customers/customers.module';
import { DebtsModule } from './debts/debts.module';
import { SellerProfitModule } from './seller-profit/seller-profit.module';
import { CompaniesModule } from './companies/companies.module';
import { UnitsModule } from './units/units.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    CarpetsModule,
    SalePointsModule,
    SalesModule,
    CustomersModule,
    DebtsModule,
    SellerProfitModule,
    CompaniesModule,
    UnitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
