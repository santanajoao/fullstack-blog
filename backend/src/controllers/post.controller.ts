import { Request, Response } from 'express';
import postService from '../services/post.service';
import { mapErrorStatus } from '../utils/http';

const handleGetPopularPosts = async (req: Request, res: Response) => {
  const quantity = Number(req.query.quantity);
  const page = Number(req.query.page) || 0;
  const { data } = await postService.getWeekPopularPosts(quantity, page);

  res.status(200).json(data);
};

const handleGetPostsByTopicId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const quantity = Number(req.query.quantity);
  const page = Number(req.query.page) || 0;
  const orderBy = req.query.orderBy as string;

  const { status, data } = await postService.getPostsByTopicId(id, { quantity, page, orderBy });
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
  const quantity = Number(req.query.quantity);
  const page = Number(req.query.page) || 0;

  const { status, data } = await postService.getPostByAccount(id, {quantity, page });
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};


const handleGetAccountPostsCount = async (req: Request, res: Response) => {
  const accountId = req.params.id;

  const { status, data } = await postService.countPostInfos(accountId);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};

const handlePostPost = async (req: Request, res: Response) => {
  const { title, description, content, topics } = req.body;
  const topicList = JSON.parse(topics);
  const accountId = req.body.local.account.id;

  const image = {
    buffer: req.file!.buffer, type: req.file!.mimetype,
  };

  const { status, data } = await postService.createPost({
    title, description, content, accountId, topics: topicList, image,
  });

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
  handleGetAccountPostsCount,
};
