/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuntasModule } from './juntas/juntas.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { SoldadoresModule } from './soldadores/soldadores.module';
import { InspectoresModule } from './inspectores/inspectores.module';
import { PaginacionModule } from './paginacion/paginacion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'Canela123$$',
      database: process.env.DB_DATABASE || 'juntas',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV !== 'production', // Desactivar sincronización en producción
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false, // Configuración SSL si es necesario
    }),
    JuntasModule,
    ProyectosModule,
    SoldadoresModule,
    InspectoresModule,
    PaginacionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
