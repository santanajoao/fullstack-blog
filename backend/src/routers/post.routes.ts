import { Router } from "express";
import postController from "../controllers/post.controller";

const topicRouter = Router();

topicRouter.get('/popular', postController.handleGetPopularPosts);

export default topicRouter;
