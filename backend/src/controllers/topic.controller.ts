import { Request, Response } from 'express';
import topicService from '../services/topic.service';
import { mapErrorStatus } from '../utils/http';

const handleGetPopularTopics = async (req: Request, res: Response) => {
  const quantity = Number(req.query.quantity);
  const { data } = await topicService.getWeekPopularTopics(quantity);

  res.status(200).json(data);
};

const handleGetAccountTopics = async (req: Request, res: Response) => {
  const { accountId } = req.params;
  const { data, status } = await topicService.getAccountTopics(accountId);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
};

const handleGetTopics = async (req: Request, res: Response) => {
  const { query, excludeIds } = req.query as Record<string, string | undefined>;

  let idsToExclude;
  if (excludeIds) { idsToExclude = excludeIds.split(','); }

  const { data } = await topicService.getTopics(query as string | undefined, idsToExclude);

  res.status(200).json(data);
};

export default {
  handleGetPopularTopics,
  handleGetAccountTopics,
  handleGetTopics,
};
