import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusGatewayDriverConfig,
  MercuriusGatewayDriver,
} from '@nestjs/mercurius';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusGatewayDriverConfig>({
      driver: MercuriusGatewayDriver,
      subscription: true,
      gateway: {
        services: [{ name: 'service', url: 'http://localhost:3000/graphql' }],
      },
    }),
  ],
  controllers: [GatewayController],
  providers: [],
})
export class GatewayModule {}
