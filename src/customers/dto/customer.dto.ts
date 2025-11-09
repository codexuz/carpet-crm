import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Abdullayev Jamshid', description: 'Customer full name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: '+998901234567', description: 'Customer phone number' })
  @IsOptional()
  @IsString()
  phone?: string;
}

export class UpdateCustomerDto {
  @ApiPropertyOptional({ example: 'Karimov Sardor', description: 'Customer full name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: '+998902345678', description: 'Customer phone number' })
  @IsOptional()
  @IsString()
  phone?: string;
}
