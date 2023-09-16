import { Likes } from '@prisma/client';
import prisma from '../lib/prisma';

export const createLike = async (accountId: string, postId: string): Promise<Likes> => {
  return prisma.likes.upsert({
    where: {
      accountId_postId: { accountId, postId },
    }, 
    create: { accountId, postId },
    update: {},
  });
};

export const findLikeByIds = async (accountId: string, postId: string): Promise<Likes | null> => {
  return prisma.likes.findUnique({
    where: {
      accountId_postId: { accountId, postId },
    },
  });
};

export const deleteLikeByIds = async (accountId: string, postId: string): Promise<Likes> => {
  return prisma.likes.delete({
    where: { accountId_postId: { accountId, postId } },
  });
};


export const countLikesByPostId = async (postId: string): Promise<number> => {
  return await prisma.likes.count({ where: { postId } });
};
