import { PartialType } from '@nestjs/mapped-types';
import { CreateSoldadoreDto } from './create-soldadore.dto';

export class UpdateSoldadoreDto extends PartialType(CreateSoldadoreDto) {}
