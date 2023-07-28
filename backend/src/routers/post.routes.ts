import { Router } from "express";
import postController from "../controllers/post.controller";

const postRouter = Router();

postRouter.get('/popular', postController.handleGetPopularPosts);
postRouter.get('/:id', postController.handleGetPostById);
postRouter.get('/author/:id', postController.handleGetPostsByAuthor);

export default postRouter;
