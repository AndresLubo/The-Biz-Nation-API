import { Request, Response, NextFunction, Router } from 'express';

import { GenreAudiovisualContentService } from './genreAudiovisualContent.service';
import {
  validatorHandler,
  propertySchema,
} from '../../middlewares/validator.handler';
import {
  CreateGenreAudiovisualContent,
  UpdateGenreAudiovisualContent,
} from '../../utils/types/genreAudiovisualContent.type';
import {
  createGenreAudiovisualContentDto,
  getGenreAudiovisualContentDto,
  updateGenreAudiovisualContentDto,
} from './genreAudiovisualContent.dto';

const service = GenreAudiovisualContentService.create();
export const genreAudiovisualContentController = Router();

genreAudiovisualContentController.get(
  '/:id',
  validatorHandler(getGenreAudiovisualContentDto, propertySchema.PARAMS),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const register = await service.findOne(parseInt(id));
      res.status(200).json(register);
    } catch (error) {
      next(error);
    }
  }
);

genreAudiovisualContentController.post(
  '/',
  validatorHandler(createGenreAudiovisualContentDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateGenreAudiovisualContent = req.body;
      const response = await service.create(data);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
);

genreAudiovisualContentController.put(
  '/:id',
  validatorHandler(getGenreAudiovisualContentDto, propertySchema.PARAMS),
  validatorHandler(updateGenreAudiovisualContentDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const changes: UpdateGenreAudiovisualContent = req.body;

      const response = await service.update(parseInt(id), changes);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

genreAudiovisualContentController.delete(
  '/:id',
  validatorHandler(getGenreAudiovisualContentDto, propertySchema.PARAMS),
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
