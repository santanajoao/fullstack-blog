/*
  Models:
    - create account, include image
    - find account by email, include image
    - find account by id, include image
    - update account by id, include image
*/

import { Account } from '@prisma/client';
import prisma from '../lib/prisma';
import { AccountCreation, AccountWithImage } from '../types/account';

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
  id: string, data: Partial<Account>
): Promise<AccountWithImage | null> => {

  return prisma.account.update({ where: { id }, data, include: includeImage });
};
