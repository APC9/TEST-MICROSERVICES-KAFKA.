import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientKafka,
  ) {}

  create(createUserDto: CreateUserDto) {
    this.userClient.emit('CREATE_USER', createUserDto);
    return 'User created successfully';
  }
}
