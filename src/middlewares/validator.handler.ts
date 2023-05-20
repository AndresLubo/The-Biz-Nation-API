import boom from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

export enum propertySchema {
  PARAMS = 'params',
  BODY = 'body',
}

export const validatorHandler = (schema: Schema, property: propertySchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      next(boom.badRequest(error));
    }else {
      next();
    }
  };
};
