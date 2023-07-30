import { Router } from 'express';
import topicController from '../controllers/topic.controller';
import postController from '../controllers/post.controller';

const topicRouter = Router();

topicRouter.get('/:id/posts/infos', postController.handleGetTopicPosts);
topicRouter.get('/:id/posts', postController.handleGetPostsByTopicId);
topicRouter.get('/popular', topicController.handleGetPopularTopics);
topicRouter.get('/account/:accountId', topicController.handleGetAccountTopics);

export default topicRouter;
