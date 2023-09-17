import { AsyncServiceResponse } from '../types/serviceResponse';
import { checkForLike } from './validations/likeValidations';
import { validatePostId } from './validations/postValidations';
import { validateAccountId } from './validations/accountValidations';
import * as likeModel from '../models/like.model';

const like = async (accountId: string, postId: string): AsyncServiceResponse<null> => {
  const accountValidation = await validateAccountId(accountId);
  if (accountValidation.status !== 'SUCCESS') return accountValidation;

  const postValidation = await validatePostId(postId);
  if (postValidation.status != 'SUCCESS') return postValidation;

  await likeModel.createLike(accountId, postId);

  return { status: 'SUCCESS', data: null };
};

const deslike = async (accountId: string, postId: string): AsyncServiceResponse<null> => {
  const existanceValidation = await checkForLike(accountId, postId);
  if (existanceValidation.status !== 'SUCCESS') return existanceValidation;

  await likeModel.deleteLikeByIds(accountId, postId);

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

  const likeCount = await likeModel.countLikesByPostId(postId);
  
  return { status: 'SUCCESS', data: { postLikes: likeCount, userLiked } };
};

export default {
  like,
  deslike,
  getPostLikes,
};
