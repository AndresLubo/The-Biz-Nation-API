import { Router, Application } from "express";


export const RouterApi = (app: Application): void => {
  const router = Router();

  app.use("/api/disney-demo/v1", router);
};
