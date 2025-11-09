import { IsNotEmpty, IsInt, IsString, IsOptional } from 'class-validator';

export class CreateDebtDto {
  @IsNotEmpty()
  @IsString()
  customerId: string;

  @IsNotEmpty()
  @IsInt()
  amount: number;

  @IsOptional()
  @IsString()
  note?: string;
}
