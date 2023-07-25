export type User = {
  id: string;
  username: string;
  email: string;
  imageUrl: string | null;
};

export type SignResponse = {
  token: string;
  account: User;
};
