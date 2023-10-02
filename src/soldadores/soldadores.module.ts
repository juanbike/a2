import { Module } from '@nestjs/common';
import { SoldadoresService } from './soldadores.service';
import { SoldadoresController } from './soldadores.controller';

@Module({
  controllers: [SoldadoresController],
  providers: [SoldadoresService],
})
export class SoldadoresModule {}
