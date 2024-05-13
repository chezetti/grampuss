import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

import { APP } from './config';

@ApiTags('App')
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return `${APP.name} API v${APP.version}`;
  }
}
