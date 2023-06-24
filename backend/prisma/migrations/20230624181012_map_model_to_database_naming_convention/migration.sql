/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TopicPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_userId_fkey`;

-- DropForeignKey
ALTER TABLE `TopicPost` DROP FOREIGN KEY `TopicPost_postId_fkey`;

-- DropForeignKey
ALTER TABLE `TopicPost` DROP FOREIGN KEY `TopicPost_topicId_fkey`;

-- DropForeignKey
ALTER TABLE `_PostToTopic` DROP FOREIGN KEY `_PostToTopic_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PostToTopic` DROP FOREIGN KEY `_PostToTopic_B_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `Topic`;

-- DropTable
DROP TABLE `TopicPost`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `topics` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(300) NOT NULL,

    UNIQUE INDEX `topics_name_key`(`name`),
    UNIQUE INDEX `topics_image_url_key`(`image_url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posts` (
    `id` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(300) NOT NULL,
    `title` VARCHAR(70) NOT NULL,
    `description` VARCHAR(200) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `likes` INTEGER NOT NULL DEFAULT 0,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_topics` (
    `topic_id` VARCHAR(191) NOT NULL,
    `post_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`post_id`, `topic_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_topics` ADD CONSTRAINT `post_topics_topic_id_fkey` FOREIGN KEY (`topic_id`) REFERENCES `topics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_topics` ADD CONSTRAINT `post_topics_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToTopic` ADD CONSTRAINT `_PostToTopic_A_fkey` FOREIGN KEY (`A`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToTopic` ADD CONSTRAINT `_PostToTopic_B_fkey` FOREIGN KEY (`B`) REFERENCES `topics`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
