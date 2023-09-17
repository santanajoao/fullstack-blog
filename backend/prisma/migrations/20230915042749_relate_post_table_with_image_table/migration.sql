/*
  Warnings:

  - A unique constraint covering the columns `[imageId]` on the table `posts` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `posts` ADD COLUMN `imageId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `posts_imageId_key` ON `posts`(`imageId`);

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
