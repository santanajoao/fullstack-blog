import prisma from '../lib/prisma';
import { AsyncServiceResponse } from '../types/serviceResponse';
import { checkForLike, validateAccountId, validatePostId } from './validations/likeValidations';

const like = async (accountId: string, postId: string): AsyncServiceResponse<null> => {
  const accountValidation = await validateAccountId(accountId);
  if (accountValidation.status !== 'SUCCESS') return accountValidation;

  const postValidation = await validatePostId(accountId);
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

export default {
  like,
  deslike,
};
