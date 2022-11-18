import { Body, Controller, Post } from '@nestjs/common';
import { CatDto } from '../shared/dtos/cat.dto';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  createCat(@Body() cat: CatDto) {
    return this.catService.createCat(cat);
  }
}
