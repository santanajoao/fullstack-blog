import { NextFunction, Request, Response } from 'express';

const checkForPostFields = (req: Request, res: Response, next: NextFunction) => {
  const requiredFields = ['title', 'description', 'content'];

  const missingField = requiredFields.find((field) => !req.body[field]);
  if (missingField) {
    return res
      .status(400)
      .json({ message: `O campo '${missingField}' é obrigatório`});
  }

  next();
}

export default checkForPostFields;
