import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('customers')
@Controller('customers')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new customer' })
  @ApiResponse({ status: 201, description: 'Customer created' })
  create(@Body() dto: CreateCustomerDto) {
    return this.customersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all customers' })
  @ApiResponse({ status: 200, description: 'List of customers' })
  @ApiQuery({ name: 'search', required: false, description: 'Search by name or phone' })
  findAll(@Query('search') search?: string) {
    return this.customersService.findAll(search);
  }

  @Get('top-debtors')
  @ApiOperation({ summary: 'Get top debtors' })
  @ApiResponse({ status: 200, description: 'List of top debtors' })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of top debtors to return' })
  getTopDebtors(@Query('limit') limit?: string) {
    return this.customersService.getTopDebtors(limit ? parseInt(limit) : 10);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get customer by ID' })
  @ApiResponse({ status: 200, description: 'Customer found' })
  @ApiResponse({ status: 404, description: 'Customer not found' })
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Get(':id/debt-summary')
  @ApiOperation({ summary: 'Get customer debt summary' })
  @ApiResponse({ status: 200, description: 'Debt summary' })
  getDebtSummary(@Param('id') id: string) {
    return this.customersService.getDebtSummary(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update customer' })
  @ApiResponse({ status: 200, description: 'Customer updated' })
  update(@Param('id') id: string, @Body() dto: UpdateCustomerDto) {
    return this.customersService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete customer' })
  @ApiResponse({ status: 200, description: 'Customer deleted' })
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
