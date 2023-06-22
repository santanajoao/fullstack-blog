import { NextFunction, Request, Response } from 'express';

const checkForSignUpFields = (req: Request, res: Response, next: NextFunction) => {
  const requiredFields = ['name', 'email', 'password'];

  const missingField = requiredFields.find((field) => !(field in req.body));
  if (missingField) {
    return res.status(400).json({
      message: {
        [missingField]: `O campo "${missingField}" é obrigatório`,
      },
    });
  }

  next();
}

export default checkForSignUpFields;
