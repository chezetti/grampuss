import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './modules/bot/bot.module';
import { BotService } from './modules/bot/bot.service';
import { TelegramModule } from './modules/telegram/telegram.module';
import { UserModule } from './modules/user/user.module';
import { configModule } from './config.root';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  providers: [AppService, BotService],
  imports: [
    configModule,
    TelegrafModule.forRootAsync({
      useFactory: () => ({
        token: process.env.TELEGRAM_BOT_TOKEN,
      }),
    }),
    BotModule,
    TelegramModule,
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
