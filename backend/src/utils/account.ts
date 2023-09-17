import { Account } from '@prisma/client';
import { AccountPublicFields } from '../types/account';

export const getAccountPublicFields = (
  { id, username, email, about, imageUrl }: Account
): AccountPublicFields => {
  return { id, username, email, imageUrl, about };
};
