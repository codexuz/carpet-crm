import { IsNotEmpty, IsString, IsPhoneNumber, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../../../generated/client';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
