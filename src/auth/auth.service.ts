import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { UserRole } from '../../generated/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        phone: dto.phone,
        role: dto.role || UserRole.SELLER,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    const token = this.generateToken(user.id, user.role);

    return {
      user,
      access_token: token,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { phone: dto.phone },
    });

    if (!user) {
      throw new UnauthorizedException('Telefon raqam yoki parol noto\'g\'ri');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Telefon raqam yoki parol noto\'g\'ri');
    }

    const token = this.generateToken(user.id, user.role);

    return {
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        role: user.role,
        createdAt: user.createdAt,
      },
      access_token: token,
    };
  }

  async validateUser(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });
  }

  private generateToken(userId: string, role: UserRole): string {
    return this.jwtService.sign({ sub: userId, role });
  }
}
