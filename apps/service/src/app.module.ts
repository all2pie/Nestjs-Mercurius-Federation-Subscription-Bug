import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusFederationDriverConfig,
  MercuriusFederationDriver,
} from '@nestjs/mercurius';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      autoSchemaFile: true,
      federationMetadata: true,
      subscription: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}
