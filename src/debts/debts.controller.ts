import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { DebtsService } from './debts.service';
import { CreateDebtDto } from './dto/debt.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('debts')
@Controller('debts')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class DebtsController {
  constructor(private readonly debtsService: DebtsService) {}

  @Post()
  @ApiOperation({ summary: 'Create debt record' })
  @ApiResponse({ status: 201, description: 'Debt created' })
  create(@Body() dto: CreateDebtDto) {
    return this.debtsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all debt records' })
  @ApiResponse({ status: 200, description: 'List of debts' })
  @ApiQuery({ name: 'customerId', required: false, description: 'Filter by customer' })
  findAll(@Query('customerId') customerId?: string) {
    return this.debtsService.findAll(customerId);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get debt statistics' })
  @ApiResponse({ status: 200, description: 'Debt statistics' })
  getDebtStats() {
    return this.debtsService.getDebtStats();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get debt record by ID' })
  @ApiResponse({ status: 200, description: 'Debt found' })
  @ApiResponse({ status: 404, description: 'Debt not found' })
  findOne(@Param('id') id: string) {
    return this.debtsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete debt record' })
  @ApiResponse({ status: 200, description: 'Debt deleted' })
  remove(@Param('id') id: string) {
    return this.debtsService.remove(id);
  }
}
