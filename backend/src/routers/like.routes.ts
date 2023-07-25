import { Router } from "express";
import likeController from "../controllers/like.controller";
import checkForLikeFields from "../middlewares/checkForLikeFields";

const likeRouter = Router();

likeRouter.post('/add', checkForLikeFields, likeController.handlePostLike);
likeRouter.delete(
  '/remove', checkForLikeFields, likeController.handleDeleteDeslike,
);

export default likeRouter;
