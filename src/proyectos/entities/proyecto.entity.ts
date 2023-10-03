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
  Cliente: string;

  @Column('text', { nullable: true })
  @Column({ length: 70})
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  titulo: string;

  @Column('text', { nullable: true })
  @Column({ length: 25 })
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  revision: string;

  @Column('text', { nullable: true })
  @Column({ length: 60 })
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  elaboradoPor: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
