import { Model } from 'sequelize';
import boom from '@hapi/boom';

import { sequelize } from '../../sequelize/sequelize.index';
import { GenreAudiovisualContent } from '../../sequelize/models/genre-audiovisualContent.model';
import { CreateGenreAudiovisualContent, UpdateGenreAudiovisualContent } from '../../utils/types/genreAudiovisualContent.type';

import { GenreService } from '../genre/genre.service';
import { AudiovisualContentService } from '../audiovisual_content/audiovisualContent.service';

const genreService = GenreService.create();
const audiovisualContentService = AudiovisualContentService.create();

const { models } = sequelize;

export class GenreAudiovisualContentService {
  static instance: GenreAudiovisualContentService | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  static create() {
    if (GenreAudiovisualContentService.instance === null)
      GenreAudiovisualContentService.instance =
        new GenreAudiovisualContentService();
    return GenreAudiovisualContentService.instance;
  }

  async findOne(id: number): Promise<Model<GenreAudiovisualContent>> {
    const response: Model<GenreAudiovisualContent> | null = await models.GenreAudiovisualContent.findByPk(id);

    if (!response) throw boom.notFound(`The genre-audiovisual content with id ${id} does not exist.`)
    return response;
  }

  async create(data: CreateGenreAudiovisualContent): Promise<Model<GenreAudiovisualContent>> {
    await genreService.findOne(data.genreId);
    await audiovisualContentService.findOne(data.audiovisualContentId)

    const newRegister: Model<GenreAudiovisualContent> = await models.GenreAudiovisualContent.create(data);
    return newRegister;
  }

  async update(id: number, changes: UpdateGenreAudiovisualContent): Promise<Model<GenreAudiovisualContent>> {
    if (changes.genreId !== undefined) await genreService.findOne(changes.genreId);
    if (changes.audiovisualContentId !== undefined) await audiovisualContentService.findOne(changes.audiovisualContentId)

    const register: Model<GenreAudiovisualContent> = await this.findOne(id);
    const newRegister = await register.update({...register, ...changes});
    return newRegister;
  }

  async delete(id: number){
    const register = await this.findOne(id);
    await register.destroy();
    return { message: `${id} genre-audiovisual content removed.` };
  }
}
