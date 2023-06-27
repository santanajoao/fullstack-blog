import { Request, Response } from "express";
import accountService from "../services/account.service";
import { mapErrorStatus } from "../utils/http";
import { AccountPublicFields } from "../types/account";

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

const handleGetAccountByEmail = async (req: Request, res: Response) => {
  const account: AccountPublicFields = req.body.local.account;

  const { status, data } = await accountService.getAccountByEmail(account.email);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
}

export default {
  handlePostAccount,
  handlePostSignIn,
  handleGetAccountByEmail,
};
