import { NextFunction, Request, Response } from "express";

const checkForFields = (fields: string[]) => {  
  return (req: Request, res: Response, next: NextFunction) => {
    const missingField = fields.find((field) => !req.body[field]);
    if (missingField) {
      return res
        .status(400)
        .json({ message: `O campo '${missingField}' é obrigatório`});
    }

    next();
  };
};

export default checkForFields;