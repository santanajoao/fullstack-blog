import { Request, Response } from 'express';
import accountService from '../services/account.service';
import { mapErrorStatus } from '../utils/http';
import { ImageCreation } from '../types/image';

const handlePostAccount = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const { status, data } = await accountService
    .createAccount({ username, email, password });
  
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(201).json(data);
};

const handlePostSignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { status, data } = await accountService.signIn({ email, password });
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
};

const handleGetAccountById = async (req: Request, res: Response) => {
  const accountId = req.body.local ? req.body.local.account.id : req.params.id;
  
  const { status, data } = await accountService.getAccountById(accountId);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
};

const handlePatchCredentials = async (req: Request, res: Response) => {
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

const handlePatchPersonal = async (req: Request, res: Response) => {
  const accountId = req.body.local.account.id;
  const { username, about } = req.body;

  const image: ImageCreation = {
    buffer: req.file?.buffer, type: req.file?.mimetype,
  };

  const { status, data } = await accountService.updateAccountPersonalInfos({
    id: accountId,
    username,
    about,
    image,
  });
  
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
};

export default {
  handlePatchCredentials,
  handlePostAccount,
  handlePostSignIn,
  handleGetAccountById,
  handlePatchPersonal,
};
