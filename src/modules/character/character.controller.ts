import { NextFunction, Request, Response, Router } from 'express';

import { CharacterService } from './character.service';
import {
  validatorHandler,
  propertySchema,
} from '../../middlewares/validator.handler';
import {
  CreateCharacter,
  UpdateCharacter,
} from '../../utils/types/character.type';
import { getCharacterDto } from './character.dto';
import { createCharacterDto } from './character.dto';
import { updateCharacterDto } from './character.dto';

const service = CharacterService.create();
export const characterController = Router();

characterController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const characters = await service.findAll();
      res.status(200).json(characters);
    } catch (error) {
      next(error);
    }
  }
);

characterController.get(
  '/:id',
  validatorHandler(getCharacterDto, propertySchema.PARAMS),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const character = await service.findOne(parseInt(id));
      res.status(200).json(character);
    } catch (error) {
      next(error);
    }
  }
);

characterController.post(
  '/',
  validatorHandler(createCharacterDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateCharacter = req.body;
      const response = await service.create(data);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
);

characterController.put(
  '/:id',
  validatorHandler(getCharacterDto, propertySchema.PARAMS),
  validatorHandler(updateCharacterDto, propertySchema.BODY),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const changes: UpdateCharacter = req.body;

      const response = await service.update(parseInt(id), changes);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

characterController.delete(
  '/:id',
  validatorHandler(getCharacterDto, propertySchema.PARAMS),
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
