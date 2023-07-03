import { Post } from "@prisma/client";
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
  topic: string,
  posts: Post[],
};

const getPostsByTopicId = async (topicId: string, orderProperty: string): AsyncServiceResponse<PostByTopic> => {
  const idValidation = await validateTopicId(topicId);
  if (idValidation.status !== 'SUCCESS') return idValidation;

  const topicName = idValidation.data.name;

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

  return { status: 'SUCCESS', data: { topic: topicName, posts } };
};

export default {
  getWeekPopularPosts,
  getWeekPosts,
  getPostsByTopicId,
};
