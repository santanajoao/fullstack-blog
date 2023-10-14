import { Router } from 'express';
import * as commentController from '../controllers/comment.controller';
import validateToken from '../middlewares/validateToken';
import checkForFields from '../middlewares/checkForFields';

const commentRouter = Router();

commentRouter.post('/:id/votes', validateToken, commentController.handlePostVote);
commentRouter.delete('/:id/votes', validateToken, commentController.handleDeleteVote);

commentRouter.put(
  '/:id',
  checkForFields(['comment']),
  validateToken,
  commentController.handlePutCommentById,
);

commentRouter.delete(
  '/:id', validateToken, commentController.handleDeleteCommentById,
);

export default commentRouter;
