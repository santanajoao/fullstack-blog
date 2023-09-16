import { Likes } from '@prisma/client';
import prisma from '../../lib/prisma';
import { AsyncServiceResponse } from '../../types/serviceResponse';
import * as likeModel from '../../models/like.model';

export const checkForLike = async (
  accountId: string, postId: string
): AsyncServiceResponse<Likes> => {
  const like = await likeModel.findLikeByIds(accountId, postId);

  if (!like) {
    return { status: 'NOT_FOUND', data: { message: 'Você não deu like nesse post' } }
  }
  return { status: 'SUCCESS', data: like };
};
