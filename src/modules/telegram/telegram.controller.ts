import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TelegramService } from './telegram.service';

@ApiTags('Telegram')
@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get('check-subscribe')
  async checkSubscribeToTelegram(@Query() dto: { telegramId: string }) {
    return this.telegramService.checkSubscribeToTelegram(dto.telegramId);
  }
}
