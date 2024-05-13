import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async createUser(providerId: string, userName: string) {
    return this.prismaClient.user.create({
      data: {
        providerId,
        userName,
      },
    });
  }

  async findUserByTonWallet(tonWallet: string) {
    return this.prismaClient.user.findFirst({
      where: {
        tonWallet,
      },
    });
  }

  async findUserByTelegramId(telegramId: string) {
    return this.prismaClient.user.findFirst({
      where: {
        telegramId,
      },
    });
  }

  async findUserByTwitterId(twitterId: string) {
    return this.prismaClient.user.findFirst({
      where: {
        twitterId,
      },
    });
  }

  async updateTelegramIdById({ telegramId, id }: { telegramId: string; id: number }) {
    return this.prismaClient.user.update({
      where: {
        id,
      },
      data: {
        telegramId: String(telegramId),
      },
    });
  }

  async updateTwitterIdById({ id, twitterId }: { id: number; twitterId: string }) {
    return this.prismaClient.user.update({
      where: {
        id,
      },
      data: {
        twitterId,
      },
    });
  }

  async updateTonWalletById({ id, tonWallet }: { id: number; tonWallet: string }) {
    return this.prismaClient.user.update({
      where: {
        id,
      },
      data: {
        tonWallet,
      },
    });
  }

  async updateTelegramFollow(data: { isSubscride: boolean; id: number }) {
    return this.prismaClient.user.update({
      where: {
        id: data.id,
      },
      data: {
        telegramFollow: data.isSubscride,
      },
    });
  }

  async updateTwitterFollow(data: { isSubscride: boolean; id: number }) {
    return this.prismaClient.user.update({
      where: {
        id: data.id,
      },
      data: {
        twitterFollow: data.isSubscride,
      },
    });
  }

  async createUserByTonWallet(tonWallet: string) {
    return this.prismaClient.user.create({
      data: {
        tonWallet,
      },
    });
  }

  // async createUserByTelegramId(telegramId: string) {
  //   return await this.prismaClient.user.create({
  //     data: {
  //      telegramId: telegramId
  //     },
  //   });
  // }

  async addPointsById(data: { points: number; id: number }) {
    return this.prismaClient.user.update({
      where: {
        id: data.id,
      },
      data: {
        points: { increment: data.points },
      },
    });
  }
}
