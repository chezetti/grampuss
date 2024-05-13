import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-by-telegram-id/:telegramId')
  async getUserByTelegramId(@Param('telegramId') telegramId: string) {
    return this.userService.getUserByTelegramId(telegramId);
  }

  @Get('get-by-twitter-id/:twitterId')
  async getUserByTwitterId(@Param('twitterId') twitterId: string) {
    return this.userService.getUserByTwitterId(twitterId);
  }

  @Get('get-by-ton-wallet/:tonWallet')
  async getUserByTonWallet(@Param('tonWallet') tonWallet: string) {
    return this.userService.getUserByTonWallet(tonWallet);
  }

  @Put('update/telegram-id')
  async updateTelegramIdById(@Body() body: { telegramId: string; id: number }) {
    return this.userService.updateTelegramIdById(body);
  }

  @Put('update/ton-wallet')
  async updateTonWalletById(@Body() body: { id: number; tonWallet: string }) {
    return this.userService.updateTonWalletById(body);
  }

  @Put('update/twitter-id')
  async updateTwitterIdById(@Body() body: { id: number; twitterId: string }) {
    return this.userService.updateTwitterIdById(body);
  }

  @Post('create/by-ton-wallet')
  async createUserByTonWallet(@Body() data: { tonWallet: string }) {
    return this.userService.createUserByTonWallet(data.tonWallet);
  }

  // @Post('create/by-telegram-id')
  // async createUserByTelegramId(@Body() data: {telegramId: string}) {
  //   return await this.userService.createUserByTelegramId(data.telegramId);
  // }
}
