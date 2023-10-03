/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuntasModule } from './juntas/juntas.module';
import { JuntasController } from './juntas/juntas.controller';
import { ProyectosModule } from './proyectos/proyectos.module';
import { SoldadoresModule } from './soldadores/soldadores.module';
import { InspectoresModule } from './inspectores/inspectores.module';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Canela123$$',
      database: 'juntas',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Esto crea automáticamente tablas en la base de datos (solo para desarrollo)
    }),
    JuntasModule,
    ProyectosModule,
    SoldadoresModule,
    InspectoresModule
    
   
   
  ],
  controllers: [JuntasController],
  providers: [],
  
})
export class AppModule {}
