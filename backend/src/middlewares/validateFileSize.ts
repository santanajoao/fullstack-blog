import { NextFunction, Request, Response } from 'express';

const validateFileSize = (maxMbSize: number) => (req: Request, res: Response, next: NextFunction) => {
  const maxBytesSize = maxMbSize * 1e6;

  if (req.file && req.file.size > maxBytesSize) {
    return res.status(422).json({
      message: `Tamanho de arquivo muito grande. O tamanho máximo é de ${maxMbSize}MB`
    });
  }

  next();
};

export default validateFileSize;
