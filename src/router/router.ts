import { Router, Application } from "express";
import { userController } from "../modules/user/user.controller";
import { authController } from "../modules/auth/auth.controller";


export const RouterApi = (app: Application): void => {
  const router = Router();

  router.use('/users', userController);
  router.use('/auth', authController)

  app.use("/api/disney-demo/v1", router);
};
