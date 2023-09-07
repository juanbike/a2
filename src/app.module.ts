import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuntasModule } from './juntas/juntas.module';
import { JuntasController } from './juntas/juntas.controller';
import { JuntasService } from './juntas/juntas.service';

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
  ],

  controllers: [JuntasController],
  providers: [JuntasService],
})
export class AppModule {}
