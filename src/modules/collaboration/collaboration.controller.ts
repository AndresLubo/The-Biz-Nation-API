import { Request, Response, NextFunction, Router } from 'express';

import { CollaborationService } from './collaboration.service';
import {
  validatorHandler,
  propertySchema,
} from '../../middlewares/validator.handler';
import {
  CreateCollaboration,
  UpdateCollaboration,
} from '../../utils/types/collaboration.type';
import {
  createCollaborationDto,
  getCollaborationDto,
  updateCollaborationDto,
} from './collaboration.dto';

const service = CollaborationService.create();
export const collaborationController = Router();

collaborationController.get(
  '/:id',
  validatorHandler(getCollaborationDto, propertySchema.PARAMS),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const collaborarion = await service.findOne(parseInt(id));
      res.status(200).json(collaborarion);
    } catch (error) {
      next(error);
    }
  }
);

collaborationController.post(
  '/',
  validatorHandler(createCollaborationDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateCollaboration = req.body;
      const response = await service.create(data);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
);

collaborationController.put(
  '/:id',
  validatorHandler(getCollaborationDto, propertySchema.PARAMS),
  validatorHandler(updateCollaborationDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const changes: UpdateCollaboration = req.body;

      const response = await service.update(parseInt(id), changes);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

collaborationController.delete(
  '/:id',
  validatorHandler(getCollaborationDto, propertySchema.PARAMS),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await service.delete(parseInt(id));
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);
