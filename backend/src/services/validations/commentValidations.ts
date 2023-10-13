import { Comment } from '@prisma/client';
import * as commentModel from '../../models/comment.model';
import { AsyncServiceResponse } from '../../types/serviceResponse';

export const validateCommentId = async (id: string): AsyncServiceResponse<Comment> => {
  const comment = await commentModel.findCommentById(id);

  if (!comment) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Não foi possível encontrar esse comentário' },
    };
  }
  return { status: 'SUCCESS', data: comment };
};
