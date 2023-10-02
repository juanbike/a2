/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateJuntaDto } from './create-junta.dto';
import { IsNotEmpty, IsString } from 'class-validator';
export class UpdateJuntaDto extends PartialType(CreateJuntaDto) {

  
  @IsNotEmpty()
  @IsString()
  nominal: string;


  @IsNotEmpty()
  @IsString()
  nominal1: string;

  @IsNotEmpty()
  @IsString()
  lineaOSistema: string;

  @IsNotEmpty()
  @IsString()
  especificacion: string;

  @IsNotEmpty()
  @IsString()
  schedule: string;

  @IsNotEmpty()
  @IsString()
  tipo_extremos: string;

  @IsNotEmpty()
  @IsString()
  tipo_material: string;

  @IsNotEmpty()
  @IsString()
  material: string;

  @IsNotEmpty()
  @IsString()
  diam_inch_contabilizadas: string;

  @IsNotEmpty()
  @IsString()
  factor_pulgadas_diametrales: string;

  @IsNotEmpty()
  @IsString()
  pulgadas_diametrales: string;

  @IsNotEmpty()
  @IsString()
  proyectID: string;

  
  @IsNotEmpty()
  @IsString()
  usuarioID: string;

}
