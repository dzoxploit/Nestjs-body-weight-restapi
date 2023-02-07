import { Test, TestingModule } from '@nestjs/testing';
import { BeratService } from './berat.service';

describe('BeratService', () => {
  let service: BeratService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeratService],
    }).compile();

    service = module.get<BeratService>(BeratService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
