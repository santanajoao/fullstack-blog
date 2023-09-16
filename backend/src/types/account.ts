import { Account, Image } from "@prisma/client";
import { ImageCreation, ImageKey } from "./image";

export type SignInFields = Pick<Account, 'email' | 'password'>;

export type AccountCreation = SignInFields & Pick<Account, 'username'>;

export type AccountWithImage = Account & ImageKey

export type AccountUpdate = Omit<Account, 'id'> & {
  image: ImageCreation,
};

export type AccountPublicFields = Omit<Account, 'password' | 'imageId'>;

export type SignResponse = {
  token: string;
  account: AccountPublicFields;
};

export type AccountCredentials = Pick<Account, 'email' | 'id' | 'password'> & {
  newPassword: string;
};

export type AccountPersonalInfos = Pick<Account, 'id' | 'about' | 'username'>;

export type AccountPersonalInfosUpdate = AccountPersonalInfos & {
  image?: ImageCreation,
};
