const post = {
  id: 'UUID',
  createdAt: new Date(),
  description: 'Description',
  imageUrl: 'https://image-link.com',
  title: 'Title',
  accountId: 'UUID',
};

const postList = [post];

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
