/*
 - find post by id
 - find popular week posts
 - find posts by topicId
 - count posts by topicId
 - find posts by accountId
 - create post
 - count posts by accountId
*/

import { Post, Prisma } from "@prisma/client";
import { ModelPostCreation } from "../types/post";
import prisma from "../lib/prisma";

export const createPost = async (data: ModelPostCreation) => {
  const { topics, ...otherData } = data;
  return prisma.post.create({
    data: {
      ...otherData,
      topics: { connect: topics },
    },
    include: { image: true },
  });  
};

type FindOptions = {
  orderBy?: Prisma.PostFindManyArgs['orderBy'],
  take?: number;
  skip?: number;
}

const defaultOptions = {
  orderBy: undefined,
  take: undefined,
  skip: undefined,
}

export const findPostsByTopicId = async (
  topicId: string, options: FindOptions = defaultOptions
) => {
  const { orderBy, take, skip } = options;

  return prisma.post.findMany({
    where: {
      topics: {
        some: { id: topicId },
      },
    },
    include: {
      account: { select: { username: true } },
      image: true,
    },
    orderBy, take, skip,
  });
};

export const countPostsByTopicId = async (topicId: string): Promise<number> => {
  return prisma.post.count({ where: { topics: { some: { id: topicId } } } });
};

export const findPostById = async (id: string) => {
  return prisma.post.findUnique({
    where: { id },
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
};

export const findPostByAccountId = async (
  accountId: string, options: FindOptions = defaultOptions
) => {
  const { take, skip } = options;

  return prisma.post.findMany({
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
    take, skip,
  });
};
