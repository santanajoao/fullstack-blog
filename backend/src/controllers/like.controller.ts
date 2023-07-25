import { Request, Response } from "express";
import likeService from "../services/like.service";
import { mapErrorStatus } from "../utils/http";

const handlePostLike = async (req: Request, res: Response) => {
  const { accountId, postId } = req.body;
  const { status, data } = await likeService.like(accountId, postId);

  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(204).end();
};

const handleDeleteDeslike = async (req: Request, res: Response) => {
  const { accountId, postId } = req.body;
  const { status, data } = await likeService.deslike(accountId, postId);

  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(204).end();
};

export default {
  handlePostLike,
  handleDeleteDeslike,
};
