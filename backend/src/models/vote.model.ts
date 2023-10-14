import { Vote } from '@prisma/client';
import prisma from '../lib/prisma';

export const createVote = async (
  accountId: string, commentId: string,
): Promise<Vote> => {
  return prisma.vote.upsert({
    where: {
      accountId_commentId: { accountId, commentId },
    }, 
    create: { accountId, commentId },
    update: {},
  });
};

export const deleteVoteById = async (
  accountId: string, commentId: string,
): Promise<Vote> => {
  return prisma.vote.delete({
    where: { accountId_commentId: { accountId, commentId } }
  });
};
