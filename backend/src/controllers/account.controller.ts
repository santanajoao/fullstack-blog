import { Request, Response } from "express";
import accountService from "../services/account.service";
import { mapErrorStatus } from "../utils/http";

const handlePostAccount = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const { status, data } = await accountService.createAccount(
    { name, email, password },
  );
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(201).json(data);
};

const handlePostSignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { status, data } = await accountService.signIn(email, password);
  if (status !== 'SUCCESS') {
    return res.status(mapErrorStatus(status)).json(data);
  }
  res.status(200).json(data);
};

export default {
  handlePostAccount,
  handlePostSignIn,
};
