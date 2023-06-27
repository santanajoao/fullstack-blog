import { Post } from "@prisma/client";

const post: Post = {
  id: 'UUID',
  createdAt: new Date(),
  description: 'Description',
  imageUrl: 'https://image-link.com',
  likes: 1,
  title: 'Title',
  accountId: 'UUID',
};

const postList: Post[] = [post];

// na resposta json os valores são convertidos 
const postListResponse = postList.map((post) => ({
  ...post,
  createdAt: post.createdAt.toISOString(),
}));

export default {
  post,
  postList,
  postListResponse,
};
