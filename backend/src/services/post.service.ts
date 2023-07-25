import { Post, Topic } from "@prisma/client";
import prisma from "../lib/prisma";
import { AsyncServiceResponse } from "../types/serviceResponse";
import dates from "../utils/dates";
import treatQuantity from "./validations/treatQuantity";
import validateTopicId from "./validations/validateTopicId";

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
      { createdAt: 'desc' },
      { likes: { _count: 'desc' } },
    ],
    take: treatQuantity(quantity),
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

const getPostsByTopicId = async (
  topicId: string, orderProperty: string,
): AsyncServiceResponse<Post[]> => {
  const idValidation = await validateTopicId(topicId);
  if (idValidation.status !== 'SUCCESS') return idValidation;
  
  const orderBy = getOrderQuery(orderProperty);
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
    orderBy,
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
}

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

export default {
  getWeekPopularPosts,
  getPostsByTopicId,
  getTopicPostsInfos,
  getPostById,
};
