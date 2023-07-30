/*
  Warnings:

  - The primary key for the `likes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `posts` table. All the data in the column will be lost.
  - Added the required column `account_id` to the `likes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `account_id` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `likes` DROP FOREIGN KEY `likes_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `posts` DROP FOREIGN KEY `posts_user_id_fkey`;

-- AlterTable
ALTER TABLE `accounts` ADD COLUMN `about` VARCHAR(200) NULL;

-- AlterTable
ALTER TABLE `likes` DROP PRIMARY KEY,
    DROP COLUMN `user_id`,
    ADD COLUMN `account_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`account_id`, `post_id`);

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `user_id`,
    ADD COLUMN `account_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `likes` ADD CONSTRAINT `likes_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
