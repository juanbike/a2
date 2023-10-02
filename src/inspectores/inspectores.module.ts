/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { InspectoresService } from './inspectores.service';
import { InspectoresController } from './inspectores.controller';

@Module({
  controllers: [InspectoresController],
  providers: [InspectoresService],
  exports:[InspectoresService]
})
export class InspectoresModule {}
