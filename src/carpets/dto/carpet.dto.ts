import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsInt,
  Min,
} from 'class-validator';

export class CreateCarpetDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  width: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  height: number;

  @IsNotEmpty()
  @IsString()
  pattern: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  costPrice: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  sellPrice: number;
}

export class UpdateCarpetDto {
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  width?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  height?: number;

  @IsOptional()
  @IsString()
  pattern?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  costPrice?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  sellPrice?: number;
}

export class CarpetFilterDto {
  @IsOptional()
  @IsString()
  pattern?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsOptional()
  @IsString()
  isSold?: string;

  @IsOptional()
  @IsString()
  search?: string;
}
