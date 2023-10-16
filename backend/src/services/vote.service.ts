import { AsyncServiceResponse } from '../types/serviceResponse';
import { validateAccountId } from './validations/accountValidations';
import { validateCommentId } from './validations/commentValidations';
import * as voteModel from '../models/vote.model';

export const upvote = async (
  accountId: string, commentId: string
): AsyncServiceResponse<null> => {
  const accountValidation = await validateAccountId(accountId);
  if (accountValidation.status !== 'SUCCESS') return accountValidation;

  const commentValidation = await validateCommentId(commentId);
  if (commentValidation.status != 'SUCCESS') return commentValidation;

  await voteModel.createVote(accountId, commentId);

  return { status: 'SUCCESS', data: null };
};

export const downvote = async (
  accountId: string, postId: string,
): AsyncServiceResponse<null> => {
  await voteModel.deleteVoteById(accountId, postId);

  return { status: 'SUCCESS', data: null };
};
