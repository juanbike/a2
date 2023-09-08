import { PartialType } from '@nestjs/mapped-types';
import { CreateJuntaDto } from './create-junta.dto';
import { IsNotEmpty, IsString } from 'class-validator';
export class UpdateJuntaDto extends PartialType(CreateJuntaDto) {
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
