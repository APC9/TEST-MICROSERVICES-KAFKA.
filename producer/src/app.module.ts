import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BitcoinModule } from './bitcoin/bitcoin.module';
import { EthereumModule } from './ethereum/ethereum.module';

@Module({
  imports: [UserModule, BitcoinModule, EthereumModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
