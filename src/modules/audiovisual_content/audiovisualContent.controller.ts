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
  queryFiltersDto,
  updateAudiovisualContentDto,
} from './audiovisualContent.dto';
import { filter } from '../../utils/types/filter.audiovisualContent.type';
import passport from 'passport';

const service = AudiovisualContentService.create();
export const audiovisualContentController = Router();

audiovisualContentController.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(queryFiltersDto, propertySchema.QUERY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filters: filter = req.query;
      const movies = await service.findAll(filters);
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }
);

audiovisualContentController.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
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

audiovisualContentController.post(
  '/',
  passport.authenticate('jwt', { session: false }),
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

audiovisualContentController.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
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

audiovisualContentController.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
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
