import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { SalesService } from './sales.service';
import { CreateSaleDto, AddPaymentDto } from './dto/sale.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('sales')
@Controller('sales')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new sale' })
  @ApiResponse({ status: 201, description: 'Sale created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request - carpet not available or validation error' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  create(@Body() dto: CreateSaleDto) {
    return this.salesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sales with optional filters' })
  @ApiResponse({ status: 200, description: 'List of sales' })
  @ApiQuery({ name: 'salePointId', required: false, description: 'Filter by sale point' })
  @ApiQuery({ name: 'sellerId', required: false, description: 'Filter by seller' })
  @ApiQuery({ name: 'customerId', required: false, description: 'Filter by customer' })
  findAll(
    @Query('salePointId') salePointId?: string,
    @Query('sellerId') sellerId?: string,
    @Query('customerId') customerId?: string,
  ) {
    return this.salesService.findAll({ salePointId, sellerId, customerId });
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get sales statistics' })
  @ApiResponse({ status: 200, description: 'Sales statistics' })
  getStats() {
    return this.salesService.getStats();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get sale details by ID' })
  @ApiResponse({ status: 200, description: 'Sale found' })
  @ApiResponse({ status: 404, description: 'Sale not found' })
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Post(':id/payment')
  @ApiOperation({ summary: 'Add payment to a sale' })
  @ApiResponse({ status: 200, description: 'Payment added successfully' })
  @ApiResponse({ status: 400, description: 'Bad request - no debt or invalid amount' })
  @ApiResponse({ status: 404, description: 'Sale not found' })
  addPayment(@Param('id') id: string, @Body() dto: AddPaymentDto) {
    return this.salesService.addPayment(id, dto);
  }
}
