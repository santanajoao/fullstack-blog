import { Image } from "@prisma/client";
import prisma from "../lib/prisma";
import { findAccountById } from "./account.model";
import { ImageCreation } from "../types/image";

export const deleteImageByAccountId = async (accountId: string): Promise<Image | null> => {
  const account = await findAccountById(accountId);
  if (!account || !account.imageId) return null;

  const deletedImage = await prisma.image
    .delete({ where: { id: account.imageId }});

  return deletedImage;
};

export const createImage = async (data: ImageCreation): Promise<Image> => {
  return prisma.image.create({ data: data });
};