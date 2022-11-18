import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [CatModule],
  controllers: [AppController],
})
export class AppModule {}
