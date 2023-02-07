import { Test, TestingModule } from '@nestjs/testing';
import { BeratController } from './berat.controller';
import { BeratService } from './berat.service';

describe('BeratController', () => {
  let controller: BeratController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeratController],
      providers: [BeratService],
    }).compile();

    controller = module.get<BeratController>(BeratController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
