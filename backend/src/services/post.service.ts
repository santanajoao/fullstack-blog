import { Post, Topic } from "@prisma/client";
import prisma from "../lib/prisma";
import { AsyncServiceResponse } from "../types/serviceResponse";
import dates from "../utils/dates";
import treatQuantity from "./validations/treatQuantity";
import validateTopicId from "./validations/validateTopicId";
import { getPostByTopicQuery } from "./queries/posts.queries";

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
      // { likes: 'desc' },
      { createdAt: 'desc' },
    ],
    take: treatQuantity(quantity),
  });

  return { status: 'SUCCESS', data: popularPosts };
};

const getPostsByTopicId = async (
  topicId: string, orderProperty: string,
): AsyncServiceResponse<Post[]> => {
  const idValidation = await validateTopicId(topicId);
  if (idValidation.status !== 'SUCCESS') return idValidation;
  
  const query = getPostByTopicQuery(topicId, orderProperty);
  const posts = await prisma.post.findMany(query);

  return { status: 'SUCCESS', data: posts };
};

type PostInfos = {
  topic: Topic,
  posts: {
    likes: number,
    quantity: number,
  },
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
}

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

export default {
  getWeekPopularPosts,
  getWeekPosts,
  getPostsByTopicId,
  getTopicPostsInfos,
};
