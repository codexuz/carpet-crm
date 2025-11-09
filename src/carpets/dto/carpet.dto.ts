import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsInt,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCarpetDto {
  @ApiProperty({ example: '#001', description: 'Unique carpet code' })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({ example: 2.0, description: 'Carpet width in meters' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  width: number;

  @ApiProperty({ example: 3.0, description: 'Carpet height in meters' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  height: number;

  @ApiProperty({ example: 'Classic Rose', description: 'Carpet pattern/catalog code' })
  @IsNotEmpty()
  @IsString()
  pattern: string;

  @ApiPropertyOptional({ example: 'Qizil', description: 'Carpet color' })
  @IsOptional()
  @IsString()
  color?: string;

  @ApiPropertyOptional({ example: 'Jun', description: 'Carpet material' })
  @IsOptional()
  @IsString()
  material?: string;

  @ApiProperty({ example: 1500000, description: 'Cost price in som' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  costPrice: number;

  @ApiProperty({ example: 2000000, description: 'Selling price in som' })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  sellPrice: number;
}

export class UpdateCarpetDto {
  @ApiPropertyOptional({ example: '#001', description: 'Unique carpet code' })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional({ example: 2.0, description: 'Carpet width in meters' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  width?: number;

  @ApiPropertyOptional({ example: 3.0, description: 'Carpet height in meters' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  height?: number;

  @ApiPropertyOptional({ example: 'Classic Rose', description: 'Carpet pattern' })
  @IsOptional()
  @IsString()
  pattern?: string;

  @ApiPropertyOptional({ example: 'Qizil', description: 'Carpet color' })
  @IsOptional()
  @IsString()
  color?: string;

  @ApiPropertyOptional({ example: 'Jun', description: 'Carpet material' })
  @IsOptional()
  @IsString()
  material?: string;

  @ApiPropertyOptional({ example: 1500000, description: 'Cost price in som' })
  @IsOptional()
  @IsInt()
  @Min(0)
  costPrice?: number;

  @ApiPropertyOptional({ example: 2000000, description: 'Selling price in som' })
  @IsOptional()
  @IsInt()
  @Min(0)
  sellPrice?: number;
}

export class CarpetFilterDto {
  @ApiPropertyOptional({ example: 'Classic Rose', description: 'Filter by pattern' })
  @IsOptional()
  @IsString()
  pattern?: string;

  @ApiPropertyOptional({ example: 'Qizil', description: 'Filter by color' })
  @IsOptional()
  @IsString()
  color?: string;

  @ApiPropertyOptional({ example: 'Jun', description: 'Filter by material' })
  @IsOptional()
  @IsString()
  material?: string;

  @ApiPropertyOptional({ example: 'false', description: 'Filter by sold status (true/false)' })
  @IsOptional()
  @IsString()
  isSold?: string;

  @ApiPropertyOptional({ example: 'Rose', description: 'Search in code, pattern, color, material' })
  @IsOptional()
  @IsString()
  search?: string;
}
