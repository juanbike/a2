/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateSoldadoreDto } from './create-soldadore.dto';
import { IsNotEmpty, IsString, IsPhoneNumber } from 'class-validator';

export class UpdateSoldadoreDto extends PartialType(CreateSoldadoreDto) {
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

  
  
  @IsString()
  @IsPhoneNumber()
  telefono2: string;
}
