import { Comment } from '@prisma/client';
import prisma from '../lib/prisma';
import { CommentCreation } from '../types/comment';
import { FindOptions } from './post.model';

export const findCommentById = async (id: string): Promise<Comment | null> => {
  return prisma.comment.findUnique({ where: { id } });
};

export const findCommentsByPostId = async (postId: string, options: FindOptions) => {
  const { take, skip } = options;

  return await prisma.comment.findMany({
    where: { postId },
    select: {
      id: true,
      comment: true,
      _count: {
        select: {
          votes: true,
        },
      },
      account: {
        select: {
          id: true,
          imageUrl: true,
          username: true,
        },
      },
    },
    take,
    skip,
  });
};

export const createComment = async (
  { comment, postId, accountId }: CommentCreation,
) => {
  return prisma.comment.create({
    data: {
      comment,
      postId,
      accountId,
    },
    select: {
      id: true,
      comment: true,
      _count: {
        select: {
          votes: true,
        },
      },
      account: {
        select: {
          id: true,
          imageUrl: true,
          username: true,
        },
      },
    },
  });
};

export const deleteCommentById = async (id: string): Promise<Comment> => {
  return await prisma.comment.delete({ where: { id } });
};

export const updateCommentById = async (id: string, comment: string) => {
  return await prisma.comment.update({
    where: { id },
    data: { comment },
    select: {
      id: true,
      comment: true,
      _count: {
        select: {
          votes: true,
        },
      },
      account: {
        select: {
          id: true,
          imageUrl: true,
          username: true,
        },
      },
    },
  });
};
