import { Router } from "express";
import likeController from "../controllers/like.controller";
import checkForLikeFields from "../middlewares/checkForLikeFields";
import validateToken from "../middlewares/validateToken";
import validateAccount from "../middlewares/validateAccount";

const likeRouter = Router();

likeRouter.post(
  '/',
  checkForLikeFields,
  validateToken,
  validateAccount,
  likeController.handlePostLike,
);

likeRouter.delete(
  '/',
  checkForLikeFields,
  validateToken,
  validateAccount,
  likeController.handleDeleteDeslike,
);

likeRouter.get(
  '/:accountId/:postId',
  likeController.handleGetPostLikes,
);

export default likeRouter;
