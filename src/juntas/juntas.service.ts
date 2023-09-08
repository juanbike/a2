/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
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

 
  //Creamos una junta

  async create(createJuntaDto: CreateJuntaDto): Promise<Junta> {
    const nuevaJunta = new Junta();
    nuevaJunta.tipo_extremos = createJuntaDto.tipo_extremos;
    nuevaJunta.tipo_material = createJuntaDto.tipo_material;
    nuevaJunta.material = createJuntaDto.material;

    return await this.juntaRepository.save(nuevaJunta);
  }


  //Encontramos todas las juntas
  async findAll(): Promise<Junta[]> {
    return await this.juntaRepository.find();
  }

  //Encontramos una junta por su id. Ver 

  async findById(id: number): Promise<Junta> {
    const junta = await this.juntaRepository.findOneBy({id:id});

    if (!junta) {
      throw new NotFoundException(`junta con ID ${id} no encontrada`);
    }

    return junta;
  }

  //Actualizamos la informacion de una junta

  async update(id: number, updatedUsuarioData: Partial<Junta>): Promise<Junta> {
    const junta = await this.juntaRepository.findOneBy({id: id})

    if (!junta) {
      throw new NotFoundException(`Junta con ID ${id} no encontrado`);
    }

    // Actualiza los campos del usuario con los datos proporcionados
    this.juntaRepository.merge(junta, updatedUsuarioData);

    return this.juntaRepository.save(junta);
  }



 /*
  update(id: number, updateJuntaDto: UpdateJuntaDto) {
    return `This action updates a #${id} junta`;
  }

  remove(id: number) {
    return `This action removes a #${id} junta`;
  }
  */
}
