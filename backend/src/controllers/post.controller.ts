import { Request, Response } from "express";
import postService from "../services/post.service";

const handleGetPopularPosts = async (req: Request, res: Response) => {
  const { data } = await postService.getWeekPopularPosts();

  res.status(200).json(data);
};

export default {
  handleGetPopularPosts,
};
