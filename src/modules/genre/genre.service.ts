import { Model } from "sequelize";
import boom from '@hapi/boom';


import { sequelize } from "../../sequelize/sequelize.index";
import { CreateGenre, Genre, UpdateGenre } from "../../utils/types/genre.type";


const { models } = sequelize;

export class GenreService {
  static instance: GenreService | null = null;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor(){}
    static create(){
      if (GenreService.instance === null) GenreService.instance = new GenreService();
      return GenreService.instance;
    }

    async findAll(): Promise<Model<Genre>[]>{
      const genres: Model<Genre>[] = await models.Genre.findAll();
      return genres;
    }

    async findOne(id: number): Promise<Model<Genre>>{
      const genre: Model<Genre> | null = await models.Genre.findByPk(id);

      if (!genre) throw boom.notFound(`The genre with id ${id} does not exist.`)
      return genre;
    }


    async create(data: CreateGenre): Promise<Model<Genre>> {
      const newGenre: Model<Genre> = await models.Genre.create(data);
      return newGenre;
    }

    async update(id: number, changes: UpdateGenre): Promise<Model<Genre>> {
      const genre = await this.findOne(id);
      const newGenre = genre.update(changes);
      return newGenre;
    }

    async delete(id: number){
      const genre = await this.findOne(id);
      await genre.destroy();
      return { message: `${id} genre removed.` };
    }
}
