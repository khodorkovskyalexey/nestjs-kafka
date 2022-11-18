import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CatDto } from '../shared/dtos/cat.dto';

@Injectable()
export class CatService {
  constructor(
    @Inject('CAT_MICROSERVICE') private readonly catClient: ClientKafka,
  ) {}

  createCat(cat: CatDto) {
    this.catClient.emit('create-cat', JSON.stringify(cat));
  }
}
