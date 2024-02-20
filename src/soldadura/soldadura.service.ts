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
    /*
    qr.toDataURL(JSON.stringify(nuevaSoldadura), (err, url) => {
      nuevaSoldadura.qrcode = url;
    });
*/

    const qrCodeData = JSON.stringify({
      nro_junta: nuevaSoldadura.nro_junta,
      tipo: nuevaSoldadura.tipo,
      plano: nuevaSoldadura.plano,
      hoja: nuevaSoldadura.hoja,
      revision: nuevaSoldadura.revision,
      area: nuevaSoldadura.area,
      fase: nuevaSoldadura.fase,
      linea: nuevaSoldadura.linea,
      diametro: nuevaSoldadura.diametro,
      espesor: nuevaSoldadura.espesor,
      cedula: nuevaSoldadura.cedula,
      pn1: nuevaSoldadura.pn1,
      pn2: nuevaSoldadura.pn2,
      wds: nuevaSoldadura.wds,
      // Agrega otros campos del soldador según sea necesario
    });

    //nuevaSoldadura.qrcode = createSoldaduraDto.qrcode;

    const qrCode = await qr.toDataURL(qrCodeData);

    nuevaSoldadura.qrcode = qrCode;

    return await this.soldadaduraRepository.save(nuevaSoldadura);
  }

  async findAll(): Promise<Soldadura[]> {
    return await this.soldadaduraRepository.find();
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
