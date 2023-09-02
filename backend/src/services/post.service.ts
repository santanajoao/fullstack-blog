import { Post, Topic } from '@prisma/client';
import prisma from '../lib/prisma';
import { AsyncServiceResponse } from '../types/serviceResponse';
import dates from '../utils/dates';
import treatQuantity from './validations/treatQuantity';
import validateTopicId from './validations/validateTopicId';
import { validateAccountId } from './validations/likeValidations';
import { TPostCreation } from '../types/post';
import { validatePost } from './validations/postValidations';
import { validateTopics } from './validations/topicValidations';

const getWeekPopularPosts = async (
  quantity: number,
  page: number,
): AsyncServiceResponse<Post[]> => {
  const treatedQuantity = treatQuantity(quantity);

  const popularPosts = await prisma.post.findMany({
    include: {
      account: {
        select: {
          username: true,
        },
      },
    },
    where: {
      createdAt: {
        gte: dates.getDateDaysAgo(7),
      },
    },
    orderBy: [
      { likes: { _count: 'desc' } },
      { createdAt: 'desc' },
    ],
    take: treatedQuantity,
    skip: treatedQuantity * page,
  });

  return { status: 'SUCCESS', data: popularPosts };
};

const getOrderQuery = (orderProperty: string) => {
  const queries: Record<string, any> = {
    likes: {
      likes: {
        _count: 'desc'
      },
    },
    creation: { createdAt: 'desc' },
    popularity: [
      { createdAt: 'desc' },
      { likes: { _count: 'desc' } },
    ],
  };

  return queries[orderProperty] ?? queries.popularity;
};

type Options = {
  orderBy: string;
  page: number;
  quantity: number;
}

const getPostsByTopicId = async (
  topicId: string, { orderBy, page, quantity }: Options,
): AsyncServiceResponse<Post[]> => {
  const idValidation = await validateTopicId(topicId);
  if (idValidation.status !== 'SUCCESS') return idValidation;
  
  const orderQuery = getOrderQuery(orderBy);
  const posts = await prisma.post.findMany({
    where: {
      topics: {
        some: {
          id: topicId,
        },
      },
    },
    include: {
      account: {
        select: {
          username: true,
        },
      },
    },
    orderBy: orderQuery,
    take: quantity,
    skip: page * quantity,
  });

  return { status: 'SUCCESS', data: posts };
};

const countPostsByTopic = async (topicId: string): Promise<number> => {
  const postCount = await prisma.post.count({
    where: {
      topics: {
        some: {
          id: topicId,
        },
      },
    },
  });

  return postCount;
};

const countLikesByTopic = async (topicId: string): Promise<number> => {
  const likeCount = await prisma.likes.count({
    where: {
      post: {
        topics: {
          some: {
            id: topicId,
          },
        },
      },
    },
  });

  return likeCount;
};

type PostInfos = {
  topic: Topic,
  posts: {
    likes: number,
    quantity: number,
  },
};

const getTopicPostsInfos = async (topicId: string): AsyncServiceResponse<PostInfos> => {
  const idValidation = await validateTopicId(topicId);
  if (idValidation.status !== 'SUCCESS') return idValidation;

  const [postCount, likeCount] = await Promise.all([
    countPostsByTopic(topicId),
    countLikesByTopic(topicId),
  ]);

  const posts = {
    likes: likeCount,
    quantity: postCount,
  };
  const topic = idValidation.data;
  return { status: 'SUCCESS', data: { topic, posts } };
};

const getPostById = async (
  postId: string,
): AsyncServiceResponse<Post> => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      account: {
        select: {
          username: true,
          imageUrl: true,
          id: true,
        },
      },
      topics: {
        select: {
          id: true,
          name: true,
        }
      },
    },
  });

  if (!post) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Não foi possível encontrar esse post' },
    };
  }


  return { status: 'SUCCESS', data: post };
};

const countLikesByAccount = async (accountId: string): Promise<number> => {
  const likeCount = await prisma.likes.count({
    where: {
      post: {
        accountId,
      },
    },
  });

  return likeCount;
};

type PostByAccountResponse = {
  posts: Post[];
  likeCount: number;
  postCount: number;
};

const getPostByAccount = async (
  accountId: string
): AsyncServiceResponse<PostByAccountResponse> => {
  const idValidation = await validateAccountId(accountId);
  if (idValidation.status !== 'SUCCESS') return idValidation;
  
  const posts = await prisma.post.findMany({
    where: {
      accountId,
    },
    orderBy: [
      { createdAt: 'desc' },
    ],
    take: 6,
  });

  const likeCount = await countLikesByAccount(accountId);
  const postCount = posts.length;

  return { status: 'SUCCESS', data: { posts, likeCount, postCount } };
};

const createPost = async ({
  accountId, title, content, description, topics,
}: TPostCreation): AsyncServiceResponse<Post> => {
  const postValidation = await validatePost({
    title, description, content, accountId, topics,
  });
  if (postValidation.status !== 'SUCCESS') return postValidation;

  const topicsValidation = await validateTopics(topics);
  if (topicsValidation.status !== 'SUCCESS') return topicsValidation;

  const createdPost = await prisma.post.create({
    data: {
      content,
      description,
      title,
      accountId,
      imageUrl: '',
      topics: {
        connect: topics.map((topic) => ({ id: topic })),
      },
    }
  });

  return { status: 'SUCCESS', data: createdPost };
};

export default {
  getWeekPopularPosts,
  getPostsByTopicId,
  getTopicPostsInfos,
  getPostById,
  getPostByAccount,
  createPost,
};
