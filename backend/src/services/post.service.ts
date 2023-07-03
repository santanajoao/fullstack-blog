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

const getPostsByTopicId = async (topicId: string, orderProperty: string): AsyncServiceResponse<Post[]> => {
  const idValidation = await validateTopicId(topicId);
  if (idValidation.status !== 'SUCCESS') return idValidation;

  const VALID_PROPERTIES = ['likes', 'createdAt'];
  const orderBy = VALID_PROPERTIES
    .includes(orderProperty) ? { [orderProperty]: 'desc' } : {};

  const posts = await prisma.post.findMany({
    where: {
      postTopics: {
        some: {
          topicId,
        },
      }
    },
    orderBy,
  });

  return { status: 'SUCCESS', data: posts };
};

export default {
  getWeekPopularPosts,
  getWeekPosts,
  getPostsByTopicId,
};
