import { Account } from "@prisma/client";

export type SignInFields = Pick<Account, 'email' | 'password'>;

export type AccountPublicFields = Pick<Account, 'email' | 'username'>;

export type AccountCreation = SignInFields & AccountPublicFields;

export type SignResponse = {
  token: string;
  account: AccountPublicFields;
};
