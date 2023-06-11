import { Router } from "express";
import topicController from "../controllers/topic.controller";

const topicRouter = Router();

topicRouter.get('/popular', topicController.handleGetPopularTopics);

export default topicRouter;
