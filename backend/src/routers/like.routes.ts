import { Router } from "express";
import likeController from "../controllers/like.controller";
import checkForLikeFields from "../middlewares/checkForLikeFields";
import validateToken from "../middlewares/validateToken";
import validateAccount from "../middlewares/validateAccount";

const likeRouter = Router();

likeRouter.post(
  '/add',
  checkForLikeFields,
  validateToken,
  validateAccount,
  likeController.handlePostLike,
);

likeRouter.delete(
  '/remove',
  checkForLikeFields,
  validateToken,
  validateAccount,
  likeController.handleDeleteDeslike,
);

export default likeRouter;
