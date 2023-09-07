import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  IsPositive,
} from 'class-validator';

@Entity()
export class Junta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  tipo_extremos: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  tipo_material: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  material: string;
}
