import { Model } from 'sequelize';
import boom from '@hapi/boom';

import { sequelize} from '../../sequelize/sequelize.index';
import { AudiovisualContent, CreateAudiovisualContent, UpdateAudioVisualContent } from '../../utils/types/audiovisualContent.type';

const { models } = sequelize;

export class AudiovisualContentService {
  static instance: AudiovisualContentService | null = null;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor(){}
    static create(){
      if (AudiovisualContentService.instance === null) AudiovisualContentService.instance = new AudiovisualContentService();
      return AudiovisualContentService.instance;
    }

    async findAll(): Promise<Model<AudiovisualContent>[]>{
      const movies: Model<AudiovisualContent>[] = await models.AudiovisualContent.findAll({
        attributes: {
          exclude: [],
        },
      });

      return movies;
    }


    async findOne(id: number): Promise<Model<AudiovisualContent>>{
      const movie: Model<AudiovisualContent> | null = await models.AudiovisualContent.findByPk(id, {});

      if (!movie) throw boom.notFound(`The audiovisual content with id ${id} does not exist.`)
      return movie;
    }


    async create(data: CreateAudiovisualContent): Promise<Model<AudiovisualContent>> {
      const newMovie: Model<AudiovisualContent> = await models.AudiovisualContent.create(data);
      return newMovie;
    }

    async update(id: number, changes: UpdateAudioVisualContent): Promise<Model<AudiovisualContent>> {
      const movie = await this.findOne(id);
      const response = await movie.update(changes);
      return response;
    }

    async delete(id: number){
      const movie = await this.findOne(id);
      await movie.destroy();
      return { message: `${id} audiovisual content removed.` };
    }
}
