/* eslint-disable @typescript-eslint/no-unused-vars */
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
    IsNumber,
    Min,
    IsPositive,
    IsEmail,
    IsPhoneNumber,
  } from 'class-validator';
  @Entity()
export class Soldadore {
    @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  @Column({ length: 15 })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Column('text', { nullable: true })
  @Column({ length: 15 })
  @IsNotEmpty()
  @IsString()
  apellido: string;

  @Column('text', { nullable: true })
  @Column({ length: 25 })
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  telefono1: string;

  @Column('text', { nullable: true })
  @Column({ length: 25 })
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  telefono2: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
