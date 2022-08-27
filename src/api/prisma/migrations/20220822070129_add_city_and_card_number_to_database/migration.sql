/*
  Warnings:

  - You are about to drop the column `barcode` on the `Members` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cardNumber]` on the table `Members` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cardNumber` to the `Members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `PersonalData` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Members_barcode_key` ON `Members`;

-- AlterTable
ALTER TABLE `Members` DROP COLUMN `barcode`,
    ADD COLUMN `cardNumber` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `PersonalData` ADD COLUMN `city` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Members_cardNumber_key` ON `Members`(`cardNumber`);
