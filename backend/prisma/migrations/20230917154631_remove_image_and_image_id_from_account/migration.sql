/*
  Warnings:

  - You are about to drop the column `imageId` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_imageId_fkey`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `imageId`;

-- DropTable
DROP TABLE `Image`;
