import { NextFunction, Request, Response } from 'express';

const checkForImage = (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return res.status(400).json({ message: 'O campo "image" é obrigatório' });
  }

  next();
};

export default checkForImage;
