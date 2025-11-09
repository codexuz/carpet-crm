import { IsNotEmpty, IsString, IsOptional, IsEnum, MinLength } from 'class-validator';
import { UserRole } from '../../../generated/client';

export class CreateUserDto {
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
  @MinLength(6)
  password: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;
}
