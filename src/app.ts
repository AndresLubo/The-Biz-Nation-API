import express, { Application } from 'express';

import { RouterApi } from './router/router';
import { boomErrorHandler, errorHandler, ormErrorHandler } from './middlewares/error.handler';


export const createApp = (): Application => {
  const app = express();

  app.use(express.json());

  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  RouterApi(app);
  return app;
}
