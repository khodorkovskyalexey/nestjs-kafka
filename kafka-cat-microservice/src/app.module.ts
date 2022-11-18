import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CAT_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'cat',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'cat-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
