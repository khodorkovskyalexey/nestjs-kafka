import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CAT_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          producer: {
            createPartitioner: Partitioners.LegacyPartitioner,
          },
          client: {
            clientId: 'cat',
            brokers: ['localhost:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            allowAutoTopicCreation: true,
            groupId: 'cat-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
