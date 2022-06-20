/*
  Warnings:

  - A unique constraint covering the columns `[barcode]` on the table `Members` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Members_barcode_key` ON `Members`(`barcode`);
