import { Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { BotService } from '../bot/bot.service';

@Injectable()
export class TelegramService {
  constructor(private readonly userService: UserService, private readonly botService: BotService) {}

  async checkSubscribeToTelegram(telegramId: string) {
    try {
      const user = await this.userService.findUserByTelegramId(telegramId);

      if (user && user.telegramId) {
        const isSubscride = await this.botService.isSubscrider(user.telegramId);

        if (isSubscride) {
          await this.userService.updateTelegramFollow({
            isSubscride: true,
            id: user.id,
          });
          if (!user.telegramFollow) {
            await this.userService.addPiontsForUser({
              points: 100,
              id: user.id,
            });
          }
          return { message: 'Вы подписчик' };
        }

        return { message: 'Вы не подписаны' };
      }

      return { message: 'Вы не авторизованы с помощью телеграм' };
    } catch (e) {
      throw new Error(e);
    }
  }
}
