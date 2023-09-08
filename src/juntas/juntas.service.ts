import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJuntaDto } from './dto/create-junta.dto';
import { UpdateJuntaDto } from './dto/update-junta.dto';
import { Junta } from './entities/junta.entity';

@Injectable()
export class JuntasService {
  constructor(
    @InjectRepository(Junta)
    private readonly juntaRepository: Repository<Junta>,
  ) {}

  /*
  create(createJuntaDto: CreateJuntaDto) {
    return 'This action adds a new junta';
  }
  */

  async create(createJuntaDto: CreateJuntaDto): Promise<Junta> {
    const nuevaJunta = new Junta();
    nuevaJunta.tipo_extremos = createJuntaDto.tipo_extremos;
    nuevaJunta.tipo_material = createJuntaDto.tipo_material;
    nuevaJunta.material = createJuntaDto.material;

    return await this.juntaRepository.save(nuevaJunta);
  }

  /*
  findAll() {
    return `This action returns all juntas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} junta`;
  }

  update(id: number, updateJuntaDto: UpdateJuntaDto) {
    return `This action updates a #${id} junta`;
  }

  remove(id: number) {
    return `This action removes a #${id} junta`;
  }
  */
}
