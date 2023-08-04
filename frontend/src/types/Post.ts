export type TPost = {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  imageUrl: string,
  likes: number,
  account: {
    username: string,
  },
  content: string;
};
