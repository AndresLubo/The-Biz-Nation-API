import { Router, Application } from "express";
import { userController } from "../modules/user/user.controller";
import { authController } from "../modules/auth/auth.controller";
import { characterController } from "../modules/character/character.controller";
import { AudiovisualContentRouter } from "../modules/audiovisual_content/audiovisualContent.controller";


export const RouterApi = (app: Application): void => {
  const router = Router();

  router.use('/users', userController);
  router.use('/auth', authController);
  router.use('/characters', characterController);
  router.use('/movies', AudiovisualContentRouter);

  app.use("/api/disney-demo/v1", router);
};
