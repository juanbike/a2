/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectoresService } from './inspectores.service';
import { InspectoresController } from './inspectores.controller';
import { Inspectore } from './entities/inspectore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inspectore])],
  controllers: [InspectoresController],
  providers: [InspectoresService],
  exports:[InspectoresService]
})
export class InspectoresModule {}
