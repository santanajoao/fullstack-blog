import { Router } from 'express';
import * as postController from '../controllers/post.controller';
import validateToken from '../middlewares/validateToken';
import checkForFields from '../middlewares/checkForFields';
import uploader from '../lib/multer';
import checkForImage from '../middlewares/checkForImage';
import validateFileSize from '../middlewares/validateFileSize';

const postRouter = Router();

postRouter.get('/popular', postController.handleGetPopularPosts);
postRouter.get('/:id', postController.handleGetPostById);
postRouter.get('/account/:id', postController.handleGetPostsByAccount);
postRouter.get('/account/:id/count', postController.handleGetAccountPostsCount);
postRouter.get('/:id/comments', postController.handleGetPostComments);

postRouter.post(
  '/',
  uploader.single('image'),
  checkForImage,
  validateFileSize(2),
  checkForFields(['title', 'description', 'content', 'topics']),
  validateToken,
  postController.handlePostPost,
);

postRouter.post(
  '/:id/comments',
  validateToken,
  checkForFields(['comment']),
  postController.handlePostComment,
);

export default postRouter;
