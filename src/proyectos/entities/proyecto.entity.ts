/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  
} from 'class-validator';
@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  @Column({ length: 70 })
  @IsNotEmpty()
  @IsString()
  nombreProyecto: string;

  @Column('text', { nullable: true })
  @Column({ length: 70 })
  @IsNotEmpty()
  @IsString()
  cliente: string;

  @Column('text', { nullable: true })
  @Column({ length: 70})
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @Column('text', { nullable: true })
  @Column({ length: 25 })
  @IsNotEmpty()
  @IsString()
  revision: string;

  @Column('text', { nullable: true })
  @Column({ length: 25 })
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @Column('text', { nullable: true })
  @Column({ length: 60 })
  @IsNotEmpty()
  @IsString()
  elaboradoPor: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
