import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BeratModule } from './crud/berat/berat.module';

@Module({
  imports: [PrismaModule, BeratModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
