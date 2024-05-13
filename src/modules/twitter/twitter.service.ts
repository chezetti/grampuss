import { Injectable } from '@nestjs/common';
import * as Twitter from 'twitter';

import { UserService } from '../user/user.service';

@Injectable()
export class TwitterService {
  private readonly twitterClient: Twitter;

  constructor(private readonly userService: UserService) {
    // env
    this.twitterClient = new Twitter({
      consumer_key: 'unACXjK44kW9XfQJZHw8mz6dt',
      consumer_secret: 'fxfYEc3fZhasYQFMJNfmvkO0A5XXcc82rHtM05QugNlENfpCoH',
      access_token_key: '1782849150943457280-dtGnDV4Pwix77hzVvvXnoNhP8G6Yc1',
      access_token_secret: 'H2wofBfFqHrHOxVW8Ko0Sq50pDIPMU1bHPUAGCpiBQO6S',
    });
  }

  getFollowers() {
    return this.twitterClient.get('followers/list', {});
  }

  async checkSubscribeToTwitter(twitterId: string) {
    try {
      const user = await this.userService.findUserByTwitterId(twitterId);

      if (user && user.twitterId) {
        // const isSubscride = await this.botService.isSubscrider(user.twitterId); // проверка подписан ли человек на канал
        const isSubscride = false;

        if (isSubscride) {
          await this.userService.updateTwitterFollow({
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

      return { message: 'Вы не авторизованы с помощью twitter' };
    } catch (e) {
      throw new Error(e);
    }
  }
}
