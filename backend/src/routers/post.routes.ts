import { Router } from 'express';
import postController from '../controllers/post.controller';
import validateToken from '../middlewares/validateToken';
import checkForPostFields from '../middlewares/checkForPostFields';

const postRouter = Router();

postRouter.get('/popular', postController.handleGetPopularPosts);
postRouter.get('/:id', postController.handleGetPostById);
postRouter.get('/account/:id', postController.handleGetPostsByAccount);
postRouter.post('/', validateToken, checkForPostFields, postController.handlePostPost);

export default postRouter;
