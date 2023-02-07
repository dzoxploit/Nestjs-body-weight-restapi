import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBeratDto } from './dto/create-berat.dto';
import { UpdateBeratDto } from './dto/update-berat.dto';

@Injectable()
export class BeratService {
  constructor(private dbService: PrismaService) {}

  async create(createBeratDto: CreateBeratDto) {
    const createBerat = await this.dbService.berat.create({
      data: {
        tanggal: new Date(),
        max: createBeratDto.max,
        min: createBeratDto.min,
        perbedaan: createBeratDto.max - createBeratDto.min,
      },
    });
    if (createBerat) {
      return {
        statusCode: 200,
        message: 'success',
        data: createBerat,
      };
    }
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    const beratAll = await this.dbService.berat.findMany();
    const rataRata = await this.dbService
      .$queryRaw`SELECT AVG(max),AVG(min),AVG(perbedaan) FROM berat`;

    return {
      statusCode: 200,
      message: 'success',
      data: beratAll ?? [],
      ratarata: rataRata ?? [],
    };
  }

  async findOne(id: number) {
    const berat = await this.dbService.berat.findFirst({ where: { id } });
    return {
      statusCode: 200,
      message: 'success',
      data: {
        tanggal: berat.tanggal,
        max: berat.max,
        min: berat.min,
        perbedaan: berat.perbedaan,
      },
    };
  }

  async update(id: number, updateBeratDto: UpdateBeratDto) {
    const berat = await this.dbService.berat.update({
      where: { id },
      data: {
        tanggal: new Date(),
        max: updateBeratDto.max,
        min: updateBeratDto.min,
        perbedaan: updateBeratDto.max - updateBeratDto.min,
      },
    });
    if (berat) {
      return {
        statusCode: 200,
        message: 'success',
        data: berat ?? {},
      };
    }
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  async remove(id: number) {
    const berat = await this.dbService.berat.delete({ where: { id } });
    if (berat) {
      return {
        statusCode: 200,
        message: 'success',
      };
    }
  }
}
