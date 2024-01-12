import { Module } from '@nestjs/common';
import { EthereumService } from './ethereum.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ETH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'ETH_ID',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'ETH_GROUP_ID',
          },
        },
      },
    ]),
  ],
  providers: [EthereumService],
  exports: [EthereumService],
})
export class EthereumModule {}
