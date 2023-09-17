import { Account } from '@prisma/client';
import prisma from '../lib/prisma';
import { AccountCreation, AccountUpdate } from '../types/account';

export const createAccount = async (
  data: AccountCreation
): Promise<Account> => {

  return prisma.account.create({ data });
};

export const findAccountById = async (id: string): Promise<Account | null> => {
  return prisma.account.findUnique({ where: { id } });
};

export const findAccountByEmail = async (
  email: string
): Promise<Account | null> => {

  return prisma.account.findUnique({ where: { email } });
};

export const updateAccountById = async (
  id: string, data: Partial<AccountUpdate>,
): Promise<Account | null> => {
  return prisma.account
    .update({ where: { id }, data: data });
};
