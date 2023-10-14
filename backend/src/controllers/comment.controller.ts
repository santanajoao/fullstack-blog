import { Request, Response } from 'express';
import * as commentService from '../services/comment.service';
import { mapErrorStatus } from '../utils/http';

export const handlePutCommentById = async (req: Request, res: Response) => {
  const { comment } = req.body;
  const { id } = req.params;

  const { status, data } = await commentService.updateCommentById(id, comment);

  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  return res.status(200).json(data);
};

export const handleDeleteCommentById = async (req: Request, res: Response) => {
  const commentId = req.params.id;

  const { status, data } = await commentService.deleteCommentById(commentId);

  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  return res.status(204).end();
};
