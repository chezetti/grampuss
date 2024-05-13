import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';

import { Telegraf } from 'telegraf';

@Injectable()
export class BotService {
  constructor(@InjectBot() private readonly bot: Telegraf) {}

  async isSubscrider(telegramId: string) {
    const data = await this.bot.telegram.getChatMember(process.env.TELEGRAM_CHANAL_ID, Number(telegramId));

    if (data.status === 'left') {
      return false;
    }

    return true;
  }
}
