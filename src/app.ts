import express, { Application } from 'express';
import swaggerUI from 'swagger-ui-express';
import * as data from './swaggerDocs.json'

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
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(data));

  RouterApi(app);

  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  return app;
};
