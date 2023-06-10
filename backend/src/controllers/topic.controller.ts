import { Request, Response } from "express";
import topicService from "../services/topic.service";

const handleGetPopularTopics = async (req: Request, res: Response) => {
  const { data } = await topicService.getPopularTopics();

  res.status(200).json(data);
};

export default {
  handleGetPopularTopics,
};
