import { NextFunction, Request, Response } from "express";
import jwt from "../lib/jwt";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.get('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'O token de autenticação é obrigatório' });
  }

  const { valid, data } = jwt.readToken(token);
  if (!valid) {
    return res.status(401).json({ message: 'Token de autenticação inválido' });
  }

  req.body.local = { account: data };

  next();
};

export default validateToken;
