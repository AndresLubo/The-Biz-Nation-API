import boom from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

export const validatorHandler = (schema: Schema, property: keyof typeof Request) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.get(property);
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      next(boom.badRequest(error));
    }else {
      next();
    }
  };
};
