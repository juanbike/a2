/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  Allow,
} from 'class-validator';

@Entity()
export class Junta {
  @PrimaryGeneratedColumn()
  id: number;

  
  @Column('text', {nullable: true})
  @Column({length:5})
  @IsNotEmpty()
  @IsString()
  nominal: string;



  @Column('text', {nullable: true})
  @Column({length:5})
  @IsNotEmpty()
  @IsString()
  nominal1: string;

  @Column('text', {nullable: true})
  @Column({length:150})
  @IsNotEmpty()
  @IsString()
  lineaOSistema: string;

  @Column('text', {nullable: true})
  @Column({length:5})
  @IsNotEmpty()
  @IsString()
  especificacion: string;

  @Column('text', {nullable: true})
  @Column({length:5})
  @IsNotEmpty()
  @IsString()
  schedule: string;

  
  @Column('text', {nullable: true})
  @Column({length:12})
  @IsNotEmpty()
  @IsString()
  tipo_extremos: string;

  @Column('text', {nullable: true})
  @Column({length:15})
  @IsNotEmpty()
  @IsString()
  tipo_material: string;

  @Column('text', {nullable: true})
  @Column({length:30})
  @IsNotEmpty()
  @IsString()
  material: string;

  @Column('text', {nullable: true})
  @Column({length:7})
  @IsNotEmpty()
  @IsString()
  diam_inch_contabilizadas: string;

  @Column('text', {nullable: true})
  @Column({length:7})
  @IsNotEmpty()
  @IsString()
  factor_pulgadas_diametrales: string;

  @Column('text', {nullable: true})
  @Column({length:7})
  @IsNotEmpty()
  @IsString()
  pulgadas_diametrales: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Allow()
  @Column('text', {nullable: true})
  @Column({length:7})
  @IsNotEmpty()
  @IsString()
  proyectID: string;

  @Allow()
  @Column('text', {nullable: true})
  @Column({length:7})
  @IsNotEmpty()
  @IsString()
  usuarioID: string; // El ID del usuario que creó el proyecto


}
