import { Router } from "express";
import postController from "../controllers/post.controller";

const topicRouter = Router();

topicRouter.get('/popular', postController.handleGetPopularPosts);
topicRouter.get('/:id', postController.handleGetPostById);

export default topicRouter;
