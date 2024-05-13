import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';

@Injectable()
export class TwitterAuthStrategy extends PassportStrategy(TwitterStrategy, 'twitter') {
  constructor() {
    // TODO: env
    super({
      consumerKey: 'BO0cKmnXugFXO9AHXp6IhHoqB',
      consumerSecret: 'sLhSIAbPTwVs5p4zb0FLfCjQfwvToGJfLwQC3sqhkLFSoa9BKy',
      callbackURL: 'http://grampuss.ru:8080/auth/twitter/callback',
      includeEmail: true,
    });
  }

  async validate(token: string, tokenSecret: string, profile: any) {
    const { id, username, displayName, emails } = profile;

    return {
      id,
      username,
      displayName,
      email: emails[0].value,
      token,
      tokenSecret,
    };
  }
}
