/*
  Warnings:

  - You are about to drop the `Telegram` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "User_telegramId_key";

-- DropIndex
DROP INDEX "User_tonWallet_key";

-- DropIndex
DROP INDEX "User_twitterId_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "tonWallet" DROP NOT NULL;

-- DropTable
DROP TABLE "Telegram";
