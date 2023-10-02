/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateInspectoreDto } from './create-inspectore.dto';

import { IsNotEmpty, IsString, IsPhoneNumber } from 'class-validator';
export class UpdateInspectoreDto extends PartialType(CreateInspectoreDto) {
     
  @IsNotEmpty()
  @IsString()
  nombre: string;

  
  @IsNotEmpty()
  @IsString()
  Apellido: string;

  
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  telefono1: string;

  
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  telefono2: string;

}
