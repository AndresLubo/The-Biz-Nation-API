import express, { Application } from 'express';

import { RouterApi } from './router/router';
import {
  boomErrorHandler,
  errorHandler,
  ormErrorHandler,
} from './middlewares/error.handler';
import './utils/passport/passport.index'


export const createApp = (): Application => {
  const app = express();

  app.use(express.json());

  RouterApi(app);

  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  return app;
};
