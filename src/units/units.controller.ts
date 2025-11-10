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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { UnitsService } from './units.service';
import { CreateUnitDto, UpdateUnitDto } from './dto/unit.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('units')
@Controller('units')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new unit' })
  @ApiResponse({ status: 201, description: 'Unit created' })
  @ApiResponse({
    status: 409,
    description: 'Unit with this name or symbol already exists',
  })
  create(@Body() dto: CreateUnitDto) {
    return this.unitsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all units' })
  @ApiResponse({ status: 200, description: 'List of units' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search by name, symbol, or description',
  })
  @ApiQuery({
    name: 'isActive',
    required: false,
    description: 'Filter by active status',
  })
  findAll(
    @Query('search') search?: string,
    @Query('isActive') isActive?: string,
  ) {
    return this.unitsService.findAll(
      search,
      isActive !== undefined ? isActive === 'true' : undefined,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get unit by ID' })
  @ApiResponse({ status: 200, description: 'Unit found' })
  @ApiResponse({ status: 404, description: 'Unit not found' })
  findOne(@Param('id') id: string) {
    return this.unitsService.findOne(id);
  }

  @Get(':id/statistics')
  @ApiOperation({ summary: 'Get unit statistics' })
  @ApiResponse({ status: 200, description: 'Unit statistics' })
  @ApiResponse({ status: 404, description: 'Unit not found' })
  getStatistics(@Param('id') id: string) {
    return this.unitsService.getStatistics(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update unit' })
  @ApiResponse({ status: 200, description: 'Unit updated' })
  @ApiResponse({ status: 404, description: 'Unit not found' })
  @ApiResponse({
    status: 409,
    description: 'Unit with this name or symbol already exists',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUnitDto) {
    return this.unitsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete unit' })
  @ApiResponse({ status: 200, description: 'Unit deleted' })
  @ApiResponse({ status: 404, description: 'Unit not found' })
  @ApiResponse({
    status: 409,
    description: 'Cannot delete unit with associated carpets',
  })
  remove(@Param('id') id: string) {
    return this.unitsService.remove(id);
  }
}
