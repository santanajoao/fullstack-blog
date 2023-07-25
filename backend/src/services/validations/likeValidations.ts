import prisma from "../../lib/prisma";
import { AsyncServiceResponse } from "../../types/serviceResponse";

export const validateAccountId = async (accountId: string): AsyncServiceResponse<null> => {
  const account = await prisma.account.findUnique({
    where: {
      id: accountId,
    },
  });

  if (!account) {
    return { status: 'NOT_FOUND', data: { message: 'Conta não encontrada' } };
  }

  return { status: 'SUCCESS', data: null };
};

export const validatePostId = async (postId: string): AsyncServiceResponse<null> => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    return { status: 'NOT_FOUND', data: { message: 'Post não encontrado' } };
  }

  return { status: 'SUCCESS', data: null };
};

export const checkForLike = async (
  accountId: string, postId: string
): AsyncServiceResponse<null> => {
  const like = await prisma.likes.findUnique({
    where: {
      accountId_postId: { accountId, postId },
    },
  });

  if (!like) {
    return { status: 'NOT_FOUND', data: { message: 'Você não deu like nesse post' } }
  }
  return { status: 'SUCCESS', data: null };
};
