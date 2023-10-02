import { Injectable } from '@nestjs/common';
import { CreateInspectoreDto } from './dto/create-inspectore.dto';
import { UpdateInspectoreDto } from './dto/update-inspectore.dto';

@Injectable()
export class InspectoresService {
  create(createInspectoreDto: CreateInspectoreDto) {
    return 'This action adds a new inspectore';
  }

  findAll() {
    return `This action returns all inspectores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inspectore`;
  }

  update(id: number, updateInspectoreDto: UpdateInspectoreDto) {
    return `This action updates a #${id} inspectore`;
  }

  remove(id: number) {
    return `This action removes a #${id} inspectore`;
  }
}
