import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPriceBTC(payload: any) {
    console.log(payload);
  }
}
