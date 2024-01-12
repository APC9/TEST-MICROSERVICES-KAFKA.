import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPriceETH(payload: any) {
    console.log(payload);
  }
}
