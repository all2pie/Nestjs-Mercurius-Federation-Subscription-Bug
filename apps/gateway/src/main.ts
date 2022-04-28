import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    GatewayModule,
    new FastifyAdapter(),
  );
  await app.listen(80);
}
bootstrap();
