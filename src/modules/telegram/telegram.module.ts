import { Module } from '@nestjs/common';

import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { UserModule } from '../user/user.module';
import { BotModule } from '../bot/bot.module';

@Module({
  controllers: [TelegramController],
  providers: [TelegramService],
  imports: [UserModule, BotModule],
  exports: [TelegramService],
})
export class TelegramModule {}
