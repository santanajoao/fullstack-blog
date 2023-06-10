import { Router } from "express";
import topicController from "../controllers/topic.controller";

const router = Router();

router.get('/', topicController.handleGetPopularTopics);

export default router;
