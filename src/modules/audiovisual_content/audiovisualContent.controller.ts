import { Response, Request, NextFunction, Router } from 'express';

import { AudiovisualContentService } from './audiovisualContent.service';
import {
  validatorHandler,
  propertySchema,
} from '../../middlewares/validator.handler';
import {
  CreateAudiovisualContent,
  UpdateAudioVisualContent,
} from '../../utils/types/audiovisualContent.type';
import {
  createAudiovisualContentDto,
  getAudiovisualContentDto,
  updateAudiovisualContentDto,
} from './audiovisualContent.dto';

const service = AudiovisualContentService.create();
export const AudiovisualContentRouter = Router();

AudiovisualContentRouter.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movies = await service.findAll();
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }
);

AudiovisualContentRouter.get(
  '/:id',
  validatorHandler(getAudiovisualContentDto, propertySchema.PARAMS),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await service.findOne(parseInt(id));
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

AudiovisualContentRouter.post(
  '/',
  validatorHandler(createAudiovisualContentDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateAudiovisualContent = req.body;
      const response = await service.create(data);

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
);

AudiovisualContentRouter.put(
  '/:id',
  validatorHandler(getAudiovisualContentDto, propertySchema.PARAMS),
  validatorHandler(updateAudiovisualContentDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const changes: UpdateAudioVisualContent = req.body;
      const response = await service.update(parseInt(id), changes);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

AudiovisualContentRouter.delete(
  '/:id',
  validatorHandler(getAudiovisualContentDto, propertySchema.PARAMS),
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
