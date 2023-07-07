import { Post, Topic } from "@prisma/client";
import prisma from "../lib/prisma";
import { AsyncServiceResponse } from "../types/serviceResponse";
import dates from "../utils/dates";
import treatQuantity from "./validations/treatQuantity";
import validateTopicId from "./validations/validateTopicId";

const getWeekPosts = async (): AsyncServiceResponse<Post[]> => {
  const posts = await prisma.post.findMany({
    where: {
      createdAt: {
        gte: dates.getDateDaysAgo(7),
      },
    },
  });

  return { status: 'SUCCESS', data: posts };
};

const getWeekPopularPosts = async (
  quantity: number,
): AsyncServiceResponse<Post[]> => {
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
      { likes: 'desc' },
      { createdAt: 'desc' },
    ],
    take: treatQuantity(quantity),
  });

  return { status: 'SUCCESS', data: popularPosts };
};

type PostByTopic = {
  topic: Topic,
  posts: Post[],
};

const getPostsByTopicId = async (
  topicId: string, orderProperty: string,
): AsyncServiceResponse<PostByTopic> => {
  const idValidation = await validateTopicId(topicId);
  if (idValidation.status !== 'SUCCESS') return idValidation;

  const topic = idValidation.data;

  const VALID_PROPERTIES = ['likes', 'createdAt'];
  const orderBy = VALID_PROPERTIES
    .includes(orderProperty) ? { [orderProperty]: 'desc' } : {};

  const posts = await prisma.post.findMany({
    include: {
      account: {
        select: {
          username: true,
        },
      },
    },
    where: {
      postTopics: {
        some: {
          topicId,
        },
      }
    },
    orderBy,
  });

  return { status: 'SUCCESS', data: { topic, posts } };
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

  const { _sum, _count } = await prisma.post.aggregate({
    where: {
      postTopics: {
        some: { topicId },
      }
    },
    _count: true,
    _sum: { likes: true },
  });

  const posts = {
    likes: _sum.likes ?? 0,
    quantity: _count,
  };
  const topic = idValidation.data;

  return { status: 'SUCCESS', data: { topic, posts } };
};

export default {
  getWeekPopularPosts,
  getWeekPosts,
  getPostsByTopicId,
  getTopicPostsInfos,
};
