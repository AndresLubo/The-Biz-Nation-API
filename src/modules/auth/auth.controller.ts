import { NextFunction, Request, Response, Router } from 'express';
import passport from 'passport';

import { login } from './auth.dto';
import {
  propertySchema,
  validatorHandler,
} from '../../middlewares/validator.handler';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUser, User } from '../../utils/types/user.type';
import { createUserDto } from '../user/user.dto';

const service = AuthService.create();
const userService = UserService.create();

export const authController = Router();

authController.post(
  '/login',
  validatorHandler(login, propertySchema.BODY),
  passport.authenticate('local', { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: User = req.user as User;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

authController.post(
  '/register',
  validatorHandler(createUserDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: CreateUser = req.body;
      const rta = await userService.create(user);
      res.status(201).json(rta);
    } catch (error) {
      next(error);
    }
  }
);

