/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldaduraService } from './soldadura.service';
import { CreateSoldaduraDto } from './dto/create-soldadura.dto';
import { UpdateSoldaduraDto } from './dto/update-soldadura.dto';


@Controller('api/soldadura')
export class SoldaduraController {
  constructor(private readonly soldaduraService: SoldaduraService) {}

  @Post()
  create(@Body() createSoldaduraDto: CreateSoldaduraDto) {
    return this.soldaduraService.create(createSoldaduraDto);
  }

  
  @Get()
  findAll() {
    return this.soldaduraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldaduraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldaduraDto: UpdateSoldaduraDto) {
    return this.soldaduraService.update(+id, updateSoldaduraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldaduraService.remove(+id);
  }
}
