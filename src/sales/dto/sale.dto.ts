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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SaleItemDto {
  @ApiProperty({ example: 'clxxx123456789', description: 'Carpet ID' })
  @IsNotEmpty()
  @IsString()
  carpetId: string;

  @ApiProperty({ example: 2000000, description: 'Sale price for this carpet' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;
}

export class CreateSaleDto {
  @ApiProperty({ example: 'clxxx123456789', description: 'Sale point ID' })
  @IsNotEmpty()
  @IsString()
  salePointId: string;

  @ApiPropertyOptional({ example: 'clxxx123456789', description: 'Seller ID' })
  @IsOptional()
  @IsString()
  sellerId?: string;

  @ApiPropertyOptional({ example: 'clxxx123456789', description: 'Customer ID' })
  @IsOptional()
  @IsString()
  customerId?: string;

  @ApiProperty({ 
    type: [SaleItemDto],
    description: 'Array of carpets being sold',
    example: [{ carpetId: 'clxxx123456789', price: 2000000 }]
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SaleItemDto)
  items: SaleItemDto[];

  @ApiProperty({ example: 1500000, description: 'Amount paid by customer' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  paidAmount: number;
}

export class AddPaymentDto {
  @ApiProperty({ example: 500000, description: 'Payment amount' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amount: number;

  @ApiPropertyOptional({ example: 'Partial payment', description: 'Payment note' })
  @IsOptional()
  @IsString()
  note?: string;
}
