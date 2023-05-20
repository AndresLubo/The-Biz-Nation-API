import { Router, Application } from "express";
import { userController } from "../modules/user/user.controller";


export const RouterApi = (app: Application): void => {
  const router = Router();

  router.use('/users', userController);

  app.use("/api/disney-demo/v1", router);
};
