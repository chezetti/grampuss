import { Injectable } from '@nestjs/common';

import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(providerId: string, userName: string) {
    return this.userRepository.createUser(providerId, userName);
  }

  async findUserByTwitterId(twitterId: string) {
    try {
      const user = await this.userRepository.findUserByTwitterId(twitterId);
      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async findUserByTonWallet(tonWallet: string) {
    try {
      const user = await this.userRepository.findUserByTonWallet(tonWallet);
      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async findUserByTelegramId(telegramId: string) {
    try {
      const user = await this.userRepository.findUserByTelegramId(telegramId);
      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async getUserByTelegramId(telegramId: string) {
    try {
      const user = await this.userRepository.findUserByTelegramId(telegramId);
      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async getUserByTonWallet(tonWallet: string) {
    try {
      const user = await this.userRepository.findUserByTonWallet(tonWallet);
      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async getUserByTwitterId(twitterId: string) {
    try {
      const user = await this.userRepository.findUserByTwitterId(twitterId);
      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateTelegramIdById(data: { telegramId: string; id: number }) {
    try {
      const user = await this.userRepository.updateTelegramIdById(data);

      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateTwitterIdById(data: { twitterId: string; id: number }) {
    try {
      const user = await this.userRepository.updateTwitterIdById(data);

      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateTonWalletById(data: { id: number; tonWallet: string }) {
    try {
      console.log(data);
      const user = await this.userRepository.updateTonWalletById(data);

      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateTelegramFollow(data: { isSubscride: boolean; id: number }) {
    try {
      const user = await this.userRepository.updateTelegramFollow(data);

      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateTwitterFollow(data: { isSubscride: boolean; id: number }) {
    try {
      const user = await this.userRepository.updateTwitterFollow(data);

      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  async createUserByTonWallet(tonWallet: string) {
    try {
      const user = await this.userRepository.createUserByTonWallet(tonWallet);
      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }

  // async createUserByTelegramId(telegramId: string) {
  //   try {
  //     const user = await this.userRepository.createUserByTelegramId(telegramId);

  //     if (user) {
  //       return user;
  //     }

  //     throw new Error();
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // }

  async addPiontsForUser(data: { points: number; id: number }) {
    try {
      const user = await this.userRepository.addPointsById(data);
      if (user) {
        return user;
      }

      throw new Error();
    } catch (e) {
      throw new Error(e);
    }
  }
}
