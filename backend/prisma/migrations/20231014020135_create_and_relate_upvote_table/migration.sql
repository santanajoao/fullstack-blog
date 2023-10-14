-- CreateTable
CREATE TABLE `upvote` (
    `account_id` VARCHAR(191) NOT NULL,
    `post_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`account_id`, `post_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `upvote` ADD CONSTRAINT `upvote_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `upvote` ADD CONSTRAINT `upvote_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Comment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
