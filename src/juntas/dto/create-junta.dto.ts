import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJuntaDto {
  @IsNotEmpty()
  @IsString()
  tipo_extremos: string;

  @IsNotEmpty()
  @IsString()
  tipo_material: string;

  @IsNotEmpty()
  @IsString()
  material: string;
}
