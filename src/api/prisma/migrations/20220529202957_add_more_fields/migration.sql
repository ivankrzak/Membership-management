/*
  Warnings:

  - You are about to drop the column `name` on the `Member` table. All the data in the column will be lost.
  - Added the required column `country` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Member` DROP COLUMN `name`,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `gender` ENUM('MAN', 'WOMAN') NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL;
