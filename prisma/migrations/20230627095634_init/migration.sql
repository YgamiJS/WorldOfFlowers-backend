-- CreateTable
CREATE TABLE "FavoriteProducts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "slider" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "collection" BOOLEAN NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "FavoriteProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BoughtProducts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "slider" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "collection" BOOLEAN NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "BoughtProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
