/*
  Warnings:

  - You are about to drop the column `imageId` on the `posts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_imageId_fkey`;

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `imageId`;
