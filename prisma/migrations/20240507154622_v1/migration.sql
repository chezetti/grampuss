-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "tonWallet" TEXT NOT NULL,
    "telegramId" INTEGER,
    "twitterId" INTEGER,
    "telegramChecked" BOOLEAN NOT NULL DEFAULT false,
    "twitterChecked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Telegram" (
    "id" SERIAL NOT NULL,
    "telegramId" INTEGER NOT NULL,

    CONSTRAINT "Telegram_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tonWallet_key" ON "User"("tonWallet");

-- CreateIndex
CREATE UNIQUE INDEX "User_telegramId_key" ON "User"("telegramId");

-- CreateIndex
CREATE UNIQUE INDEX "User_twitterId_key" ON "User"("twitterId");

-- CreateIndex
CREATE UNIQUE INDEX "Telegram_telegramId_key" ON "Telegram"("telegramId");
