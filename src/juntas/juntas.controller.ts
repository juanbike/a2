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
import { JuntasService } from './juntas.service';
import { CreateJuntaDto } from './dto/create-junta.dto';
import { UpdateJuntaDto } from './dto/update-junta.dto';

@Controller('api/juntas')
export class JuntasController {
  constructor(private readonly juntasService: JuntasService) {}

  @Post()
  create(@Body() createJuntaDto: CreateJuntaDto) {
    return this.juntasService.create(createJuntaDto);
  }

  
  @Get()
  findAll() {
    return this.juntasService.findAll();
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.juntasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJuntaDto: UpdateJuntaDto) {
    return this.juntasService.update(+id, updateJuntaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juntasService.remove(+id);
  }
  */
}
