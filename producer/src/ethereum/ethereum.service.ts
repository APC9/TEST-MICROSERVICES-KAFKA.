import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import * as WebSocket from 'ws';

@Injectable()
export class EthereumService implements OnModuleInit {
  private pricesWs: WebSocket;

  constructor(
    @Inject('ETH_SERVICE')
    private readonly ethService: ClientKafka,
  ) {
    this.pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ethereum');

    this.pricesWs.on('message', (data) => {
      const decodedData = data.toString('utf-8');

      //'ETH_CONSUMER' va en el servicio del consumer -- recomendacion, user enum para las constantes
      this.ethService.emit('ETH_CONSUMER', decodedData);
    });

    this.pricesWs.on('error', (error) => {
      console.error('Error en la conexión WebSocket:', error);
    });

    this.pricesWs.on('close', (code, reason) => {
      console.log(`Conexión cerrada (código: ${code}, razón: ${reason})`);
    });
  }

  onModuleInit() {
    this.ethService.connect();
  }
}
