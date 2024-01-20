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



 @Column('text', { nullable: false })
  @Column({ length: 11 })
  @IsNotEmpty()
  @IsString()
  identificacion: string;
  
  
@Column('text', { nullable: false })
  @Column({ length: 10 })
  @IsNotEmpty()
  @IsString()
  estampa: string;  
  

@Column('text', { nullable: false })
  @Column({ length: 6 })
  @IsNotEmpty()
  @IsString()
  valores: string;
  
@Column('text', { nullable: false })
  @Column({ length: 4 })
  @IsNotEmpty()
  @IsString()
  calificacion: string;  

@Column('text', { nullable: false })
  @Column({ length: 6 })
  @IsNotEmpty()
  @IsString()
  baseMeal: string;
  
@Column('text', { nullable: false })
  @Column({ length: 20 })
  @IsNotEmpty()
  @IsString()
  numeroP: string;  
  

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
