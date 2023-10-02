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

@Controller('inspectores')
export class InspectoresController {
  constructor(private readonly inspectoresService: InspectoresService) {}

  @Post()
  create(@Body() createInspectoreDto: CreateInspectoreDto) {
    return this.inspectoresService.create(createInspectoreDto);
  }

  @Get()
  findAll() {
    return this.inspectoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inspectoresService.findOne(+id);
  }

  /*
  @Get(':id')
  findById(@Param('id') id: number): Promise<Junta> {
    return this.juntasService.findById(id);
  }
*/

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInspectoreDto: UpdateInspectoreDto,
  ) {
    return this.inspectoresService.update(+id, updateInspectoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inspectoresService.remove(+id);
  }
}
