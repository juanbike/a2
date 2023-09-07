import { Module } from '@nestjs/common';
import { JuntasService } from './juntas.service';
import { JuntasController } from './juntas.controller';

@Module({
  controllers: [JuntasController],
  providers: [JuntasService],
})
export class JuntasModule {}
