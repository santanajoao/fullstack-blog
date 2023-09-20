export type Account = {
  id: string;
  username: string;
  email: string;
  imageUrl: string | null;
  about: string | null;
};

export type AccountCredentials = Pick<Account, 'email'> & {
  password: string;
  newPassword: string;
};

export type AccountPersonalInfos = Pick<Account, 'about' | 'username'> & {
  image: File | null,
};
