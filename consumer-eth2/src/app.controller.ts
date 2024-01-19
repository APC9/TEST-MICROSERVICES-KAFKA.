import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('ETH_CONSUMER')
  getPriceETH(@Payload() payload: any, @Ctx() contex: KafkaContext) {
    return this.appService.getPriceETH({ payload, contex });
  }
}
