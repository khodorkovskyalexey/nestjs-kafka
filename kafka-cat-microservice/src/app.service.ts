import { Injectable } from '@nestjs/common';
import { CatDto } from './shared/dtos/cat.dto';

@Injectable()
export class AppService {
  createCat(cat: CatDto) {
    console.log('Creating cat:', cat);
  }
}
