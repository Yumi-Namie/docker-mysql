import { Test, TestingModule } from '@nestjs/testing';
import { TuitsController } from './tuits.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: TuitsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TuitsController],
      providers: [AppService],
    }).compile();

    appController = app.get<TuitsController>(TuitsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
