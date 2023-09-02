import { Request, Response } from 'express';
import postService from '../services/post.service';
import { mapErrorStatus } from '../utils/http';

const handleGetPopularPosts = async (req: Request, res: Response) => {
  const quantity = Number(req.query.quantity);
  const page = Number(req.query.page);
  const { data } = await postService.getWeekPopularPosts(quantity, page);

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

const handleGetTopicPosts = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { status, data } = await postService.getTopicPostsInfos(id);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};

const handleGetPostById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { status, data } = await postService.getPostById(id);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};

const handleGetPostsByAccount = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { status, data } = await postService.getPostByAccount(id);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};

const handlePostPost = async (req: Request, res: Response) => {
  const { title, description, content, topics } = req.body;
  const accountId = req.body.local.account.id;

  const { status, data } = await postService
    .createPost({ title, description, content, accountId, topics });

  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(201).json(data);
}

export default {
  handleGetPopularPosts,
  handleGetPostsByTopicId,
  handleGetTopicPosts,
  handleGetPostById,
  handleGetPostsByAccount,
  handlePostPost,
};
