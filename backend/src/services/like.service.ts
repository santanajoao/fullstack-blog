import prisma from '../lib/prisma';
import { AsyncServiceResponse } from '../types/serviceResponse';
import { checkForLike, validatePostId } from './validations/likeValidations';
import { validateAccountId } from './validations/accountValidations';

const like = async (accountId: string, postId: string): AsyncServiceResponse<null> => {
  const accountValidation = await validateAccountId(accountId);
  if (accountValidation.status !== 'SUCCESS') return accountValidation;

  const postValidation = await validatePostId(postId);
  if (postValidation.status != 'SUCCESS') return postValidation;

  await prisma.likes.upsert({
    create: { accountId, postId },
    update: {},
    where: {
      accountId_postId: {
        accountId, postId
      },
    },
  });

  return { status: 'SUCCESS', data: null };
};

const deslike = async (accountId: string, postId: string): AsyncServiceResponse<null> => {
  const existanceValidation = await checkForLike(accountId, postId);
  if (existanceValidation.status !== 'SUCCESS') return existanceValidation;

  await prisma.likes.delete({
    where: {
      accountId_postId: {
        accountId, postId,
      },
    },
  });

  return { status: 'SUCCESS', data: null };
};

type PostLikeResponse = {
  postLikes: number;
  userLiked: boolean;
};

const getPostLikes = async (accountId: string, postId: string): AsyncServiceResponse<PostLikeResponse> => {
  const postValidation = await validatePostId(postId);
  if (postValidation.status != 'SUCCESS') return postValidation;

  const existanceValidation = await checkForLike(accountId, postId);
  const userLiked = existanceValidation.status === 'SUCCESS';

  const likeCount = await prisma.likes.count({
    where: {
      postId,
    },
  });
  
  return {
    status: 'SUCCESS',
    data: { postLikes: likeCount, userLiked },
  };
};


export default {
  like,
  deslike,
  getPostLikes,
};
