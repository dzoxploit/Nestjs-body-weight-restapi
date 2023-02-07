import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BeratService } from './berat.service';
import { CreateBeratDto } from './dto/create-berat.dto';
import { UpdateBeratDto } from './dto/update-berat.dto';

@Controller('berat')
export class BeratController {
  constructor(private readonly beratService: BeratService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createBeratDto: CreateBeratDto) {
    return await this.beratService.create(createBeratDto);
  }

  @Get()
  async findAll() {
    return await this.beratService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.beratService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBeratDto: UpdateBeratDto,
  ) {
    return await this.beratService.update(+id, updateBeratDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.beratService.remove(+id);
  }
}
