import { Request, Response } from 'express';
import postService from '../services/post.service';
import { mapErrorStatus } from '../utils/http';
import { buildImageUrl } from '../utils/image';
import * as commentService from '../services/comment.service';
import * as voteService from '../services/vote.service';

export const handleGetPopularPosts = async (req: Request, res: Response) => {
  const quantity = Number(req.query.quantity);
  const page = Number(req.query.page) || 0;
  const { data } = await postService.getWeekPopularPosts(quantity, page);

  res.status(200).json(data);
};

export const handleGetPostsByTopicId = async (req: Request, res: Response) => {
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

export const handleGetTopicPosts = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { status, data } = await postService.getTopicPostsInfos(id);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};

export const handleGetPostById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { status, data } = await postService.getPostById(id);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};

export const handleGetPostsByAccount = async (req: Request, res: Response) => {
  const { id } = req.params;
  const quantity = Number(req.query.quantity);
  const page = Number(req.query.page) || 0;

  const { status, data } = await postService.getPostByAccount(id, {quantity, page });
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};


export const handleGetAccountPostsCount = async (req: Request, res: Response) => {
  const accountId = req.params.id;

  const { status, data } = await postService.countPostInfos(accountId);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(200).json(data);
};

export const handlePostPost = async (req: Request, res: Response) => {
  const { title, description, content, topics } = req.body;
  const topicList = JSON.parse(topics);
  const accountId = req.body.local.account.id;

  const imageUrl = buildImageUrl(req.file!.mimetype, req.file!.buffer);

  const { status, data } = await postService.createPost({
    title, description, content, accountId, topics: topicList, imageUrl
  });

  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  res.status(201).json(data);
};

export const handleGetPostComments = async (req: Request, res: Response) => {
  const quantity = Number(req.query.quantity || 20);
  const page = Number(req.query.page) || 0;
  const { id } = req.params;

  const { status, data } = await commentService
    .getCommentsByPostId(id, { quantity, page });

  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  
  return res.status(200).json(data ?? []);
};

export const handlePostComment = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const accountId = req.body.local.account.id;
  const { comment } = req.body;

  const { status, data } = await commentService
    .createComment({ comment, accountId, postId });

  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }

  return res.status(201).json(data);
};
