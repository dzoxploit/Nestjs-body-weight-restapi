import { Prisma } from '@prisma/client';
import {
  IsNotEmpty,
  IsEmpty,
  IsDate,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator';
export class CreateBeratDto {
  @IsEmpty()
  tanggal: Date;

  @IsNumber()
  @IsNotEmpty()
  max: number;

  @IsNumber()
  @IsNotEmpty()
  min: number;
}
