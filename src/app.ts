import express, { Server } from 'express';


export const createApp = (): Server => {
  const app = express();

  return app;
}
