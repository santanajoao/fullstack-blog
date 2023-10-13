import { Comment } from '@prisma/client';
import prisma from '../lib/prisma';
import { CommentCreation } from '../types/comment';

export const findCommentById = (id: string): Promise<Comment | null> => {
  return prisma.comment.findUnique({ where: { id } });
};

export const createComment = async (
  { comment, postId, accountId }: CommentCreation,
): Promise<Comment> => {
  return prisma.comment.create({
    data: {
      comment,
      postId,
      accountId,
    },
  });
};

export const deleteCommentById = async (id: string): Promise<Comment> => {
  return await prisma.comment.delete({ where: { id } });
};

export const updateCommentById = async (id: string, comment: string): Promise<Comment> => {
  return await prisma.comment.update({
    where: { id },
    data: { comment },
  });
};
