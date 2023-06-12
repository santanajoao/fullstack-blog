import { Request, Response } from "express";
import postService from "../services/post.service";

const handleGetPopularPosts = async (req: Request, res: Response) => {
  const quantity = Number(req.params.quantity);
  const { data } = await postService.getWeekPopularPosts(quantity);

  res.status(200).json(data);
};

export default {
  handleGetPopularPosts,
};
