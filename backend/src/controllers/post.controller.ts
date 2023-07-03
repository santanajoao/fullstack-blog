import { Request, Response } from "express";
import postService from "../services/post.service";
import { mapErrorStatus } from "../utils/http";

const handleGetPopularPosts = async (req: Request, res: Response) => {
  const quantity = Number(req.query.quantity);
  const { data } = await postService.getWeekPopularPosts(quantity);

  res.status(200).json(data);
};

const handleGetPostsByTopicId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orderBy = req.query.orderBy as string;

  const { status, data } = await postService.getPostsByTopicId(id, orderBy);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};

export default {
  handleGetPopularPosts,
  handleGetPostsByTopicId,
};
