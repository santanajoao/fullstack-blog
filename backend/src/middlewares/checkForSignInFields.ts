import { NextFunction, Request, Response } from 'express';

const checkForSignInFields = (req: Request, res: Response, next: NextFunction) => {
  const requiredFields = ['email', 'password'];

  const missingField = requiredFields.find((field) => !req.body[field]);
  if (missingField) {
    return res
      .status(400)
      .json({ message: `O campo '${missingField}' é obrigatório`});
  }

  next();
}

export default checkForSignInFields;
