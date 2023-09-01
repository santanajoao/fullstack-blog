import { Account } from "@prisma/client";

export type SignInFields = Pick<Account, 'email' | 'password'>;

export type AccountCreation = SignInFields & Pick<Account, 'username'>;

export type AccountPublicFields = Omit<Account, 'password'>;

export type SignResponse = {
  token: string;
  account: AccountPublicFields;
};

export type AccountCredentials = Pick<Account, 'email' | 'id' | 'password'> & {
  newPassword: string;
};

export type AccountPersonalInfos = Pick<Account, 'id' | 'about' | 'username'>;
