/*
  Warnings:

  - You are about to drop the `upvote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `upvote` DROP FOREIGN KEY `upvote_account_id_fkey`;

-- DropForeignKey
ALTER TABLE `upvote` DROP FOREIGN KEY `upvote_post_id_fkey`;

-- DropTable
DROP TABLE `upvote`;

-- CreateTable
CREATE TABLE `vote` (
    `account_id` VARCHAR(191) NOT NULL,
    `post_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`account_id`, `post_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vote` ADD CONSTRAINT `vote_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vote` ADD CONSTRAINT `vote_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Comment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
