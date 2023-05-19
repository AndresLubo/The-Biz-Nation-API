import { Request, Response, NextFunction } from 'express';
import { Boom } from '@hapi/boom';
import { ValidationError } from 'sequelize'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
      message: err.message,
      stack: err.stack,
  });
};

export const boomErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Boom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
  }else {
    next(err);
  }
};

export const ormErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
      res.status(409).json({
          statusCode: 409,
          message: `${err.errors[0].value} you already exist`,
      })
  }else {
    next(err)
  }
};


