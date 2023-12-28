import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation checking
      await schema.parseAsync(req.body);
      return next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
