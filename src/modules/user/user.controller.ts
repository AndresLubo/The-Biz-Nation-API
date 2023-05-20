import { NextFunction, Request, Response, Router } from 'express';

import { UserService } from './user.service';
import { validatorHandler, propertySchema } from '../../middlewares/validator.handler';
import { getUserDto, updateUserDto } from './user.dto';
import { UpdateUser } from '../../utils/types/user.type';

const service = UserService.create();
export const userController = Router();

userController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await service.findAll();

      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
);

userController.get(
  '/:id',
  validatorHandler(getUserDto, propertySchema.PARAMS),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const user = await service.findOne(parseInt(id));
      res.status(200).json(user);

    } catch (error) {
      next(error);
    }
  }
);

// userController.post(
//   '/',
//   validatorHandler(createUserDto, propertySchema.BODY),
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const data: CreateUser = req.body;
//       const create = await service.create(data);

//       res.status(201).json(create);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

userController.put(
  '/:id',
  validatorHandler(getUserDto, propertySchema.PARAMS),
  validatorHandler(updateUserDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const changes: UpdateUser = req.body;
      const rta = await service.update(parseInt(id), changes);

      res.status(200).json(rta);
    } catch (error) {
      next(error);
    }
  }
);

userController.delete(
  '/:id',
  validatorHandler(getUserDto, propertySchema.PARAMS),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const response = await service.delete(parseInt(id));
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);
