import { Module } from '@nestjs/common';

import { UserModule } from './../user/user.module';
import { TwitterService } from './twitter.service';
import { TwitterController } from './twitter.controller';
import { UserService } from '../user/user.service';

@Module({
  controllers: [TwitterController],
  providers: [TwitterService, UserService],
  imports: [UserModule],
  exports: [TwitterService],
})
export class TwitterModule {}
