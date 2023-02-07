import { Module } from '@nestjs/common';
import { BeratService } from './berat.service';
import { BeratController } from './berat.controller';

@Module({
  controllers: [BeratController],
  providers: [BeratService]
})
export class BeratModule {}
