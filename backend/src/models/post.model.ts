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

export const createPost = async (data: ModelPostCreation): Promise<Post> => {
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
  orderBy: Prisma.PostFindManyArgs['orderBy'],
  take: number;
  skip: number;
}

export const getPostsByTopicId = async (topicId: string, options: FindOptions) => {
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
