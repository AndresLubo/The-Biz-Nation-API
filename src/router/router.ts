import { Router, Application } from 'express';
import { userController } from '../modules/user/user.controller';
import { authController } from '../modules/auth/auth.controller';
import { characterController } from '../modules/character/character.controller';
import { audiovisualContentController } from '../modules/audiovisual_content/audiovisualContent.controller';
import { genreController } from '../modules/genre/genre.controller';
import { collaborationController } from '../modules/collaboration/collaboration.controller';
import { genreAudiovisualContentController } from '../modules/genre-audiovisual_content/genreAudiovisualContent.controller';

export const RouterApi = (app: Application): void => {
  const router = Router();

  router.use('/users', userController);
  router.use('/auth', authController);
  router.use('/characters', characterController);
  router.use('/movies', audiovisualContentController);
  router.use('/genres', genreController);
  router.use('/collaborations', collaborationController);
  router.use('/genres-movies', genreAudiovisualContentController);

  app.use('/api/disney-demo/v1', router);
};
