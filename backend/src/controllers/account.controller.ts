import { Request, Response } from 'express';
import accountService from '../services/account.service';
import { mapErrorStatus } from '../utils/http';
import { buildImageUrl } from '../utils/image';

export const handlePostAccount = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const { status, data } = await accountService
    .createAccount({ username, email, password });
  
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(201).json(data);
};

export const handlePostSignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { status, data } = await accountService.signIn({ email, password });
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
};

export const handleGetAccountById = async (req: Request, res: Response) => {
  const accountId = req.body.local ? req.body.local.account.id : req.params.id;
  
  const { status, data } = await accountService.getAccountById(accountId);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
};

export const handlePatchCredentials = async (req: Request, res: Response) => {
  const accountId = req.body.local.account.id;
  const { email, password, newPassword } = req.body;

  const { status, data } = await accountService.updateAccountCredentials({
    id: accountId,
    password,
    email,
    newPassword,
  });

  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
};

export const handlePatchPersonal = async (req: Request, res: Response) => {
  const accountId = req.body.local.account.id;
  const { username, about } = req.body;

  const imageUrl = req.file
    ? buildImageUrl(req.file.mimetype, req.file.buffer)
    : null;

  console.log(req.file);
    
  const { status, data } = await accountService.updateAccountPersonalInfos({
    id: accountId,
    username,
    about,
    imageUrl,
  });
  
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
};
