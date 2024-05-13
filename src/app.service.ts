import { Injectable } from '@nestjs/common';
import { Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

@Update()
@Injectable()
export class AppService {
  private readonly bot: Telegraf;

  constructor() {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
  }

  async getChatMembersCount(chatId: string) {
    const chatInfo = await this.bot.telegram.getChatMember(chatId, 321);

    console.log('🍀 ~ getChatMembersCount ~ chatInfo:', chatInfo);

    return chatInfo;
  }
}
