import { Post, Topic } from '@prisma/client';
import prisma from '../lib/prisma';
import { AsyncServiceResponse } from '../types/serviceResponse';
import dates from '../utils/dates';
import treatQuantity from './validations/treatQuantity';
import validateTopicId from './validations/validateTopicId';
import { validateAccountId } from './validations/accountValidations';
import { TPostCreation } from '../types/post';
import { validatePost } from './validations/postValidations';
import { validateTopics } from './validations/topicValidations';
import { buildPostWithImageUrl } from '../utils/post';
import * as likeModel from '../models/like.model';
import * as imageModel from '../models/image.model';
import * as postModel from '../models/post.model';

const getWeekPopularPosts = async (
  quantity: number,
  page: number,
): AsyncServiceResponse<Post[]> => {
  const treatedQuantity = treatQuantity(quantity);

  const posts = await prisma.post.findMany({
    include: {
      account: {
        select: {
          username: true,
        },
      },
      image: true,
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

  const popularPosts = posts.map(buildPostWithImageUrl);
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
  orderBy?: string;
  page: number;
  quantity: number;
}

const getPostsByTopicId = async (
  topicId: string, { orderBy, page, quantity }: Options,
): AsyncServiceResponse<Post[]> => {
  const idValidation = await validateTopicId(topicId);
  if (idValidation.status !== 'SUCCESS') return idValidation;
  
  const orderQuery = getOrderQuery(orderBy ?? '');
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
      image: true,
    },
    orderBy: orderQuery,
    take: quantity,
    skip: page * quantity,
  });

  const postsWithImgUrl = posts.map(buildPostWithImageUrl);
  return { status: 'SUCCESS', data: postsWithImgUrl };
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

type PostInfos = {
  topic: Topic,
  posts: {
    likes: number,
    quantity: number,
  },
};

const getTopicPostsInfos = async (
  topicId: string,
): AsyncServiceResponse<PostInfos> => {
  const idValidation = await validateTopicId(topicId);
  if (idValidation.status !== 'SUCCESS') return idValidation;

  const [postCount, likeCount] = await Promise.all([
    countPostsByTopic(topicId),
    likeModel.countLikesByTopicId(topicId),
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
      image: true,
    },
  });

  if (!post) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Não foi possível encontrar esse post' },
    };
  }


  return { status: 'SUCCESS', data: buildPostWithImageUrl(post) };
};

const getPostByAccount = async (
  accountId: string, { page, quantity }: Options,
): AsyncServiceResponse<Post[]> => {
  const idValidation = await validateAccountId(accountId);
  if (idValidation.status !== 'SUCCESS') return idValidation;
  
  const posts = await prisma.post.findMany({
    where: {
      accountId,
    },
    include: {
      account: {
        select: {
          username: true,
        },
      },
      image: true,
    },
    orderBy: [
      { createdAt: 'desc' },
    ],
    take: quantity,
    skip: page * quantity,
  });

  const postsWithImageUrl = posts.map(buildPostWithImageUrl);
  return { status: 'SUCCESS', data: postsWithImageUrl };
};

const createPost = async ({
  accountId, title, content, description, topics, image
}: TPostCreation): AsyncServiceResponse<Post> => {
  const postValidation = await validatePost({
    title, description, content, accountId, topics, image,
  });
  if (postValidation.status !== 'SUCCESS') return postValidation;

  const topicsValidation = await validateTopics(topics);
  if (topicsValidation.status !== 'SUCCESS') return topicsValidation;
  
  const { id } = await imageModel.createImage(image);
  const createdPost = await postModel.createPost({
    content,
    description,
    title,
    accountId,
    imageId: id,
    imageUrl: '',
    topics: topics.map((topic) => ({ id: topic })),
  });

  return { status: 'SUCCESS', data: buildPostWithImageUrl(createdPost) };
};

type PostCountsResponse = {
  likes: number;
  posts: number;
};

const countPostInfos = async (
  accountId: string,
): AsyncServiceResponse<PostCountsResponse> => {
  const [likeCount, postCount] = await Promise.all([
    likeModel.countPostLikesByAccountId(accountId),
    prisma.post.count({ where: { accountId } }),
  ])

  return { status: 'SUCCESS', data: { likes: likeCount, posts: postCount } };
};

export default {
  getWeekPopularPosts,
  getPostsByTopicId,
  getTopicPostsInfos,
  getPostById,
  getPostByAccount,
  createPost,
  countPostInfos,
};
