import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldadoresService } from './soldadores.service';
import { CreateSoldadoreDto } from './dto/create-soldadore.dto';
import { UpdateSoldadoreDto } from './dto/update-soldadore.dto';

@Controller('soldadores')
export class SoldadoresController {
  constructor(private readonly soldadoresService: SoldadoresService) {}

  @Post()
  create(@Body() createSoldadoreDto: CreateSoldadoreDto) {
    return this.soldadoresService.create(createSoldadoreDto);
  }

  @Get()
  findAll() {
    return this.soldadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldadoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldadoreDto: UpdateSoldadoreDto) {
    return this.soldadoresService.update(+id, updateSoldadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldadoresService.remove(+id);
  }
}
