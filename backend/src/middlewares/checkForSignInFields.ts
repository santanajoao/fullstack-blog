import { NextFunction, Request, Response } from 'express';

const checkForAccountFields = (req: Request, res: Response, next: NextFunction) => {
  const requiredFields = ['email', 'password'];

  const missingField = requiredFields.find((field) => !(field in req.body));
  if (missingField) {
    return res.status(400).json({
      message: `O campo "${missingField}" é obrigatório`,
    });
  }

  next();
}

export default checkForAccountFields;
