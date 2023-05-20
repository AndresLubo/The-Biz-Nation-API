import { Request, Response, Router, NextFunction } from 'express';

import { GenreService } from './genre.service';
import {
  validatorHandler,
  propertySchema,
} from '../../middlewares/validator.handler';
import { CreateGenre, UpdateGenre } from '../../utils/types/genre.type';
import { createGenreContentDto, getGenreDto, updateGenreDto } from './genre.dto';

const service = GenreService.create();
export const genreController = Router();

genreController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const genres = await service.findAll();
      res.status(200).json(genres);
    } catch (error) {
      next(error);
    }
  }
);

genreController.get(
  '/:id',
  validatorHandler(getGenreDto, propertySchema.PARAMS),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const genre = await service.findOne(parseInt(id));
      res.status(200).json(genre);
    } catch (error) {
      next(error);
    }
  }
);

genreController.post(
  '/',
  validatorHandler(createGenreContentDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateGenre = req.body;
      const response = await service.create(data);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
);

genreController.put(
  '/:id',
  validatorHandler(getGenreDto, propertySchema.PARAMS),
  validatorHandler(updateGenreDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const changes: UpdateGenre = req.body;

      const response = await service.update(parseInt(id), changes);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

genreController.delete(
  '/:id',
  validatorHandler(getGenreDto, propertySchema.PARAMS),
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
