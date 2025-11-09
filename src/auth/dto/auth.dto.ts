import { IsNotEmpty, IsString, IsPhoneNumber, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '../../../generated/client';

export class RegisterDto {
  @ApiProperty({ example: 'John Doe', description: 'User full name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: '+998901234567', description: 'Phone number' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ enum: UserRole, example: UserRole.SELLER, description: 'User role' })
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  @ApiProperty({ example: 'password123', description: 'User password' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginDto {
  @ApiProperty({ example: '+998901234567', description: 'Phone number' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ example: 'admin123', description: 'User password' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
