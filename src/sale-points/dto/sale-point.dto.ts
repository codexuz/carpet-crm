import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSalePointDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateSalePointDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
