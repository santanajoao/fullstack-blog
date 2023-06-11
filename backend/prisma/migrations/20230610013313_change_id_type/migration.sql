/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `TopicPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `postId` on the `TopicPost` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `A` on the `_PostToTopic` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `TopicPost` DROP FOREIGN KEY `TopicPost_postId_fkey`;

-- DropForeignKey
ALTER TABLE `_PostToTopic` DROP FOREIGN KEY `_PostToTopic_A_fkey`;

-- AlterTable
ALTER TABLE `Post` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `TopicPost` DROP PRIMARY KEY,
    MODIFY `postId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`postId`, `topicId`);

-- AlterTable
ALTER TABLE `_PostToTopic` MODIFY `A` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `TopicPost` ADD CONSTRAINT `TopicPost_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToTopic` ADD CONSTRAINT `_PostToTopic_A_fkey` FOREIGN KEY (`A`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
