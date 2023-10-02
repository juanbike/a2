import { Injectable } from '@nestjs/common';
import { CreateSoldadoreDto } from './dto/create-soldadore.dto';
import { UpdateSoldadoreDto } from './dto/update-soldadore.dto';

@Injectable()
export class SoldadoresService {
  create(createSoldadoreDto: CreateSoldadoreDto) {
    return 'This action adds a new soldadore';
  }

  findAll() {
    return `This action returns all soldadores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soldadore`;
  }

  update(id: number, updateSoldadoreDto: UpdateSoldadoreDto) {
    return `This action updates a #${id} soldadore`;
  }

  remove(id: number) {
    return `This action removes a #${id} soldadore`;
  }
}
