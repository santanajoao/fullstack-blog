import { Request, Response } from "express";
import accountService from "../services/account.service";
import { mapErrorStatus } from "../utils/http";

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
}

export default {
  handlePostAccount,
  handlePostSignIn,
  handleGetAccountById,
};
