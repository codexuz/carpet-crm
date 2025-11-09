import { IsNotEmpty, IsInt, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDebtDto {
  @ApiProperty({ 
    example: 'clxxx123456789', 
    description: 'Customer ID' 
  })
  @IsNotEmpty()
  @IsString()
  customerId: string;

  @ApiProperty({ 
    example: 500000, 
    description: 'Debt amount (positive for debt, negative for payment)',
    type: 'integer'
  })
  @IsNotEmpty()
  @IsInt()
  amount: number;

  @ApiPropertyOptional({ 
    example: 'Qo\'shimcha qarz', 
    description: 'Optional note about the debt/payment' 
  })
  @IsOptional()
  @IsString()
  note?: string;
}
