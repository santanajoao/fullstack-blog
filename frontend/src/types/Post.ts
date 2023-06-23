export type Post = {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  imageUrl: string,
  user: {
    name: string,
  }
}
