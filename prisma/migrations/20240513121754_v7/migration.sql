/*
  Warnings:

  - You are about to drop the column `telegramChecked` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `twitterChecked` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "telegramChecked",
DROP COLUMN "twitterChecked",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "telegramFollow" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "twitterFollow" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "twitterName" TEXT;
