export type User = {
  username: string;
  email: string;
  imageUrl: string | null;
};

export type SignResponse = {
  token: string;
  account: User;
};
