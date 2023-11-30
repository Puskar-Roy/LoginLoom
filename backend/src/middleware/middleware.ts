/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line prettier/prettier
export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.headers.cookie);
    next();
  } catch (error) {
    console.log(error);
  }
};


