import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CatDto } from './shared/dtos/cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create-cat')
  handleProcessPayment(@Payload() data: CatDto) {
    this.appService.createCat(data);
  }
}
