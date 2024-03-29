import { NextFunction, Request, Response } from 'express';
import { AccountPublicFields } from '../types/account';

const validateAccount = (req: Request, res: Response, next: NextFunction) => {
  const { accountId } = req.body;
  const tokenData: { account: AccountPublicFields } = req.body.local;

  if (accountId !== tokenData.account.id) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  next();
};

export default validateAccount;
