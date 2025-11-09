import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSalePointDto {
  @ApiProperty({ example: 'Toshkent Filiali', description: 'Name of the sale point location' })
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateSalePointDto {
  @ApiProperty({ example: 'Samarqand Filiali', description: 'Updated name of the sale point' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
