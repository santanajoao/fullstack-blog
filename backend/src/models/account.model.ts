import prisma from '../lib/prisma';
import { AccountCreation, AccountWithImage, AccountUpdate } from '../types/account';
import { createImage, deleteImageByAccountId } from './image.model';

const includeImage = { image: true };

export const createAccount = async (
  data: AccountCreation
): Promise<AccountWithImage> => {

  return prisma.account.create({ data, include: includeImage });
};

export const findAccountById = async (id: string): Promise<AccountWithImage | null> => {
  return prisma.account.findUnique({ where: { id }, include: includeImage });
};

export const findAccountByEmail = async (
  email: string
): Promise<AccountWithImage | null> => {

  return prisma.account.findUnique({ where: { email }, include: includeImage });
};

export const updateAccountById = async (
  id: string, data: Partial<AccountUpdate>,
): Promise<AccountWithImage | null> => {
  const { image, ...otherData } = data;

  if (image) {
    await deleteImageByAccountId(id);
    
    const createdImage = await createImage(image);
    otherData.imageId = createdImage.id;
  }

  return prisma.account
    .update({ where: { id }, data: otherData, include: includeImage });
};
