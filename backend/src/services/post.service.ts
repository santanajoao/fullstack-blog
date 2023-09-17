import { Post, Prisma, Topic } from '@prisma/client';
import { AsyncServiceResponse } from '../types/serviceResponse';
import treatQuantity from './validations/treatQuantity';
import validateTopicId from './validations/validateTopicId';
import { validateAccountId } from './validations/accountValidations';
import { TPostCreation } from '../types/post';
import { validatePost } from './validations/postValidations';
import { validateTopics } from './validations/topicValidations';
import * as likeModel from '../models/like.model';
import * as postModel from '../models/post.model';

const getWeekPopularPosts = async (
  quantity: number, page: number,
): AsyncServiceResponse<Post[]> => {
  const treatedQuantity = treatQuantity(quantity);

  const posts = await postModel.findWeekPopularPosts({
    take: treatedQuantity,
    skip: treatedQuantity * page,
  });
  
  return { status: 'SUCCESS', data: posts };
};

const getOrderQuery = (orderProperty: string) => {
  const queries: Record<string, Prisma.PostFindManyArgs['orderBy']> = {
    likes: { likes: { _count: 'desc' } },
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
  const posts = await postModel.findPostsByTopicId(topicId, {
    orderBy: orderQuery,
    take: quantity,
    skip: page * quantity,
  });
  
  return { status: 'SUCCESS', data: posts };
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
    postModel.countPostsByTopicId(topicId),
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
  const post = await postModel.findPostById(postId);

  if (!post) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Não foi possível encontrar esse post' },
    };
  }

  return { status: 'SUCCESS', data: post };
};

const getPostByAccount = async (
  accountId: string, { page, quantity }: Options,
): AsyncServiceResponse<Post[]> => {
  const idValidation = await validateAccountId(accountId);
  if (idValidation.status !== 'SUCCESS') return idValidation;
  
  const posts = await postModel.findPostByAccountId(accountId, {
    take: quantity,
    skip: page * quantity,
  });

  return { status: 'SUCCESS', data: posts };
};

const createPost = async ({
  accountId, title, content, description, topics, imageUrl,
}: TPostCreation): AsyncServiceResponse<Post> => {
  const postValidation = await validatePost({
    title, description, content, accountId, topics, imageUrl,
  });
  if (postValidation.status !== 'SUCCESS') return postValidation;

  const topicsValidation = await validateTopics(topics);
  if (topicsValidation.status !== 'SUCCESS') return topicsValidation;
  
  const createdPost = await postModel.createPost({
    content,
    description,
    title,
    accountId,
    imageUrl,
    topics: topics.map((topic) => ({ id: topic })),
  });

  return { status: 'SUCCESS', data: createdPost };
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
    postModel.countPostsByAccoundId(accountId),
  ]);

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
