/*
  Warnings:

  - You are about to alter the column `title` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(70)`.

*/
-- AlterTable
ALTER TABLE `Post` MODIFY `title` VARCHAR(70) NOT NULL,
    MODIFY `description` VARCHAR(200) NOT NULL;
