import { Router } from 'express';
import postController from '../controllers/post.controller';
import validateToken from '../middlewares/validateToken';
import checkForFields from '../middlewares/checkForFields';

const postRouter = Router();

postRouter.get('/popular', postController.handleGetPopularPosts);
postRouter.get('/:id', postController.handleGetPostById);
postRouter.get('/account/:id', postController.handleGetPostsByAccount);
postRouter.post(
  '/',
  validateToken,
  checkForFields(['title', 'description', 'content']),
  postController.handlePostPost,
);

export default postRouter;
