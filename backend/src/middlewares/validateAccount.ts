import { NextFunction, Request, Response } from "express";
import { SignPayload } from "../types/jwt";

const validateAccount = (req: Request, res: Response, next: NextFunction) => {
  const { accountId } = req.params;
  const tokenData: { account: SignPayload } = req.body.local;

  if (accountId !== tokenData.account.id) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  next();
};

export default validateAccount;
