import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('ETH_CONSUMER')
  getPriceETH(@Payload() payload: any) {
    return this.appService.getPriceETH(payload);
  }
}
