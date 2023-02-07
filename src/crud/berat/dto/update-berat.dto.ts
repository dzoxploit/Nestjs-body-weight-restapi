import { PartialType } from '@nestjs/mapped-types';
import { CreateBeratDto } from './create-berat.dto';

export class UpdateBeratDto extends PartialType(CreateBeratDto) {}
