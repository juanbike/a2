/* eslint-disable @typescript-eslint/no-unused-vars */
import * as qr from 'qrcode'; // Importa la librería para generar códigos QR
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSoldaduraDto } from './dto/create-soldadura.dto';
import { UpdateSoldaduraDto } from './dto/update-soldadura.dto';
import { Soldadura } from '../soldadura/entities/soldadura.entity';

@Injectable()
export class SoldaduraService {
  constructor(
    @InjectRepository(Soldadura)
    private readonly soldadaduraRepository: Repository<Soldadura>,
  ) {}

  //Función para crear una nueva soldadura
  async create(createSoldaduraDto: CreateSoldaduraDto): Promise<Soldadura> {
    //Creamos una instancia de la clase Soldadura con los datos del DTO
    const nuevaSoldadura = new Soldadura();
    nuevaSoldadura.nro_junta = createSoldaduraDto.nro_junta;
    nuevaSoldadura.tipo = createSoldaduraDto.tipo;
    nuevaSoldadura.plano = createSoldaduraDto.plano;
    nuevaSoldadura.hoja = createSoldaduraDto.hoja;
    nuevaSoldadura.revision = createSoldaduraDto.revision;
    nuevaSoldadura.area = createSoldaduraDto.area;
    nuevaSoldadura.fase = createSoldaduraDto.fase;
    nuevaSoldadura.linea = createSoldaduraDto.linea;
    nuevaSoldadura.diametro = createSoldaduraDto.diametro;
    nuevaSoldadura.espesor = createSoldaduraDto.espesor;
    nuevaSoldadura.cedula = createSoldaduraDto.cedula;
    nuevaSoldadura.pn1 = createSoldaduraDto.pn1;
    nuevaSoldadura.pn2 = createSoldaduraDto.pn2;
    nuevaSoldadura.wds = createSoldaduraDto.wds;
    //Genera un código QR con los datos de la nueva soldadura y lo almacena en el campo qrcode de la nueva soldadura
    qr.toDataURL(JSON.stringify(nuevaSoldadura), (err, url) => {
      nuevaSoldadura.qrcode = url;
    });

    nuevaSoldadura.qrcode = createSoldaduraDto.qrcode;

    return await this.soldadaduraRepository.save(nuevaSoldadura);
  }

  findAll() {
    return `This action returns all soldadura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soldadura`;
  }

  update(id: number, updateSoldaduraDto: UpdateSoldaduraDto) {
    return `This action updates a #${id} soldadura`;
  }

  remove(id: number) {
    return `This action removes a #${id} soldadura`;
  }
}
