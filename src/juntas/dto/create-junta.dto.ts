/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJuntaDto {
  
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
