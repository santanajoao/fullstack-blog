import { NextFunction, Request, Response } from 'express';

const checkForLikeFields = (req: Request, res: Response, next: NextFunction) => {
  const requiredFields = ['accountId', 'postId'];

  const missingField = requiredFields.find((field) => !req.body[field]);
  if (missingField) {
    return res
      .status(400)
      .json({ message: `O campo "${missingField}" é obrigatório`});
  }

  next();
}

export default checkForLikeFields;
