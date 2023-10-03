/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsPhoneNumber } from 'class-validator';
export class CreateInspectoreDto {
  
  @IsNotEmpty()
  @IsString()
  nombre: string;

  
  @IsNotEmpty()
  @IsString()
  apellido: string;

  
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  telefono1: string;

  
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  telefono2: string;


}
