/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InspectoresService } from './inspectores.service';
import { CreateInspectoreDto } from './dto/create-inspectore.dto';
import { UpdateInspectoreDto } from './dto/update-inspectore.dto';
import { Inspectore} from './entities/inspectore.entity'

@Controller('inspectores')
export class InspectoresController {
  constructor(private readonly inspectoresService: InspectoresService) {}

  @Post()
  create(@Body() createInspectoreDto: CreateInspectoreDto) {
    return this.inspectoresService.create(createInspectoreDto);
  }


  // Recuperamos todos los inspectores
  @Get()
  findAll() {
    return this.inspectoresService.findAll();
  }

  // Recuperamos un inspector por su id
  @Get(':id')
  findById(@Param('id') id: number): Promise<Inspectore> {
    return this.inspectoresService.findById(id);
  }

  //Actualizamos un inspector por su ID
  
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInspectoreDto: UpdateInspectoreDto,
  ) {
    return this.inspectoresService.update(+id, updateInspectoreDto);
  }

  // Eliminar un inspector por su Id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inspectoresService.remove(+id);
  }

  //Elimina toda
  async deleteAllJuntas(): Promise<void> {
    await this.juntaRepository.delete({});
  }


}
