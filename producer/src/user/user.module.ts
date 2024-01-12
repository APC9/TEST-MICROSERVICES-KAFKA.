import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'USER_CLIENT_ID',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'USER_GROUP_ID',
          },
        },
      },
    ]),
  ],
})
export class UserModule {}
