import { Controller, Get } from '@nestjs/common';

@Controller()
export class GatewayController {
  @Get()
  getHello(): string {
    return `Gateway`;
  }
}
