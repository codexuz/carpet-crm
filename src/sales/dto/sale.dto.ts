import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsInt,
  Min,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SaleItemDto {
  @IsNotEmpty()
  @IsString()
  carpetId: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;
}

export class CreateSaleDto {
  @IsNotEmpty()
  @IsString()
  salePointId: string;

  @IsOptional()
  @IsString()
  sellerId?: string;

  @IsOptional()
  @IsString()
  customerId?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  items: SaleItemDto[];

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  paidAmount: number;
}

export class AddPaymentDto {
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amount: number;

  @IsOptional()
  @IsString()
  note?: string;
}
