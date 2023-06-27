import { Account } from "@prisma/client";

export type SignInFields = Pick<Account, 'email' | 'password'>;

export type AccountCreation = SignInFields & Pick<Account, 'username'>;

export type AccountPublicFields = Pick<Account, 'email' | 'username' | 'imageUrl'>;

export type SignResponse = {
  token: string;
  account: AccountPublicFields;
};
