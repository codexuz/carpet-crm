import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUnitDto {
  @ApiProperty({ example: 'Square Meter', description: 'Unit name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'm²', description: 'Unit symbol' })
  @IsNotEmpty()
  @IsString()
  symbol: string;

  @ApiPropertyOptional({
    example: 'Unit of area measurement',
    description: 'Unit description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Is unit active',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateUnitDto {
  @ApiPropertyOptional({ example: 'Square Meter', description: 'Unit name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'm²', description: 'Unit symbol' })
  @IsOptional()
  @IsString()
  symbol?: string;

  @ApiPropertyOptional({
    example: 'Unit of area measurement',
    description: 'Unit description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: true, description: 'Is unit active' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
