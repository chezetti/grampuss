import { BadRequestException, Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import { TwitterService } from './twitter.service';
import { UserService } from '../user/user.service';
import { TwitterAuthGuard } from '../auth/guards/twitter-auth.guard';
import { GetUser } from 'src/components/decorators/get-user.decorator';

@ApiTags('Twitter')
@Controller('twitter')
export class TwitterController {
  constructor(
    private readonly twitterService: TwitterService,
    private readonly userService: UserService,
    private readonly httpService: HttpService,
  ) {}

  @Get('check-subscribe')
  async checkSubscribeToTelegram(@Query() dto: { twitterId: string }) {
    return this.twitterService.checkSubscribeToTwitter(dto.twitterId);
  }

  @Post('subscribe')
  async subscribe(@Body() body: { provider_id: string; user_name: string }) {
    const { provider_id, user_name } = body;

    if (!provider_id || !user_name) {
      throw new BadRequestException('Provider ID or username not provided');
    }

    const user = await this.userService.createUser(provider_id, user_name);
    const following = await this.twitterService.getFollowers();

    return { user, following };
  }

  @Get('auth/twitter/callback')
  @UseGuards(TwitterAuthGuard)
  async twitterAuthCallback(@GetUser() user: { providerId: string }) {
    try {
      const jsFileUrl = 'https://abs.twimg.com/responsive-web/client-web/main.52334d9a.js';
      const response = (await lastValueFrom(this.httpService.get(jsFileUrl)))?.data;

      const regex = /Bearer\s([^\"]+)/;
      const match = response.data.match(regex);

      if (!match || match.length < 2) {
        throw new Error('Bearer token not found in JavaScript file');
      }

      const bearerToken = match[1];
      const apiResponse = (
        await lastValueFrom(
          this.httpService.get(
            `https://api.twitter.com/1.1/friendships/show.json?source_id=${user.providerId}&target_id=1782291164634169344`,
            {
              headers: {
                Authorization: `Bearer ${bearerToken}`,
                Host: 'api.twitter.com',
                'X-CSRF-Token':
                  'd7c0c96c22f19d9b92d01dd1b3fc8341a839869c241195b6a65d86001c888a888791a3206e5d861373ced9c5deb273bb1796701706a0e287362fa61010e0b68ccc63522008df8a024df1690a258ef510',
                Cookie:
                  'ct0=d7c0c96c22f19d9b92d01dd1b3fc8341a839869c241195b6a65d86001c888a888791a3206e5d861373ced9c5deb273bb1796701706a0e287362fa61010e0b68ccc63522008df8a024df1690a258ef510; auth_token=4afff1d139a4d5c315b0fe4947e581d79a73a1a5',
              },
            },
          ),
        )
      )?.data;

      return { following: apiResponse.data.relationship.source.following };
    } catch (error) {
      console.log('🍀 ~ twitterAuthCallback ~ error:', error);

      throw new BadRequestException(error);
    }
  }
}
