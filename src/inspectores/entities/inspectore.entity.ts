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
  IsPhoneNumber
} from 'class-validator';
export class Inspectore {
    @PrimaryGeneratedColumn()
    id: number;

@Column('text', {nullable: true})
  @Column({length:15})
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @Column('text', {nullable: true})
  @Column({length:15})
  @IsNotEmpty()
  @IsString()
  Apellido: string;

  @Column('text', {nullable: true})
  @Column({length:25})
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  telefono1: string;

  @Column('text', {nullable: true})
  @Column({length:25})
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  telefono2: string;


  
    
  

}
