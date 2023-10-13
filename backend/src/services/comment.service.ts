import { Comment } from '@prisma/client';
import * as commentModel from '../models/comment.model';
import { CommentCreation } from '../types/comment';
import { validateAccountId } from './validations/accountValidations';
import { AsyncServiceResponse } from '../types/serviceResponse';
import { validatePostId } from './validations/postValidations';
import validateSchemaFields from './validations/validateSchemaFields';
import { commentSchema } from './validations/schemas/comment.schema';
import { validateCommentId } from './validations/commentValidations';
import { Options } from './post.service';

export const updateCommentById = async (id: string, comment: string): AsyncServiceResponse<Comment> => {
  const schemaValidation = validateSchemaFields(commentSchema, comment);
  if (schemaValidation.status !== 'SUCCESS') return schemaValidation;

  const commentValidation = await validateCommentId(id);
  if (commentValidation.status !== 'SUCCESS') return commentValidation;

  const updatedComment = await commentModel.updateCommentById(id, comment);
  return { status: 'SUCCESS', data: updatedComment };
};

export const deleteCommentById = async (id: string): AsyncServiceResponse<Comment> => {
  const commentValidation = await validateCommentId(id);
  if (commentValidation.status !== 'SUCCESS') return commentValidation;

  const deletedComment = await commentModel.deleteCommentById(id);
  return { status: 'SUCCESS', data: deletedComment };
};

export const createComment = async (comment: CommentCreation): AsyncServiceResponse<Comment> => {
  const accountValidation = await validateAccountId(comment.accountId);
  if (accountValidation.status !== 'SUCCESS') return accountValidation;

  const postValidation = await validatePostId(comment.postId);
  if (postValidation.status !== 'SUCCESS') return postValidation;

  const schemaValidation = validateSchemaFields(commentSchema, comment.comment);
  if (schemaValidation.status !== 'SUCCESS') return schemaValidation;

  const createdComment = await commentModel.createComment(comment);
  return { status: 'SUCCESS', data: createdComment };
};

export const getCommentsByPostId = async (postId: string, options: Options): AsyncServiceResponse<unknown> => {
  const postValidation = await validatePostId(postId);
  if (postValidation.status !== 'SUCCESS') return postValidation;

  const comments = await commentModel.findCommentsByPostId(postId, {
    skip: options.page * options.quantity,
    take: options.quantity,
  });

  return { status: 'SUCCESS', data: comments };
};