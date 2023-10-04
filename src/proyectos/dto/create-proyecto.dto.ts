import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProyectoDto {
  @IsNotEmpty()
  @IsString()
  nombreProyecto: string;

  @IsNotEmpty()
  @IsString()
  Cliente: string;

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  revision: string;

  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsNotEmpty()
  @IsString()
  elaboradoPor: string;
}
