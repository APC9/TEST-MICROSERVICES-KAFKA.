import { Module } from '@nestjs/common';
import { BitcoinService } from './bitcoin.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BTC_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'BTC_ID',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'BTC_GROUP_ID',
          },
        },
      },
    ]),
  ],
  providers: [BitcoinService],
  exports: [BitcoinService],
})
export class BitcoinModule {}
