import { Likes } from '@prisma/client';
import prisma from '../../lib/prisma';
import { AsyncServiceResponse } from '../../types/serviceResponse';

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
): AsyncServiceResponse<Likes> => {
  const like = await prisma.likes.findUnique({
    where: {
      accountId_postId: { accountId, postId },
    },
  });

  if (!like) {
    return { status: 'NOT_FOUND', data: { message: 'Você não deu like nesse post' } }
  }
  return { status: 'SUCCESS', data: like };
};
