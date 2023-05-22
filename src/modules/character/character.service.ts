import { Model } from "sequelize";
import { sequelize } from "../../sequelize/sequelize.index";
import { Character, CreateCharacter, UpdateCharacter } from "../../utils/types/character.type";
import boom from "@hapi/boom";
import { Query, filter } from "../../utils/types/filters.character.type";

const { models } = sequelize;


export class CharacterService {
  static instance: CharacterService | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor(){}
  static create(){
    if (CharacterService.instance === null) CharacterService.instance = new CharacterService();
    return CharacterService.instance;
  }

  async findAll(query: filter): Promise<Model<Character>[]>{
    let where = {};
    let association = [{
      association: 'collaborations'
    }];

    if (query.movie) where = {...where, '$collaborations.collaboration.id$': query.movie }
    if (query.name) where = { ...where, name: query.name }
    if (query.age) where = { ...where, age: query.age }

    if (!query.movie && !query.name && !query.age) association = []

    const options = {
      attributes: {
        exclude: ['history', 'age', 'weight'],
      },
      include: association,
      where: {...where}
    };

    const characters: Model<Character>[] = await models.Character.findAll(options);

    return characters;
  }

  async findOne(id: number): Promise<Model<Character>>{
    const character: Model<Character> | null = await models.Character.findByPk(id, {
      include: [{
        association: 'collaborations',
        attributes: { exclude: [] }
      }]
    });

    if (!character) throw boom.notFound(`The character with id ${id} does not exist.`);
    return character;
  }

  async create(data: CreateCharacter): Promise<Model<Character>> {
    const newCharacter: Model<Character>  = await models.Character.create(data);
    return newCharacter;
  }

  async update(id: number, changes: UpdateCharacter): Promise<Model<Character>>{
    const character  = await this.findOne(id);
    const response = await character.update(changes);

    return response;
  }

  async delete(id: number){
    const character = await this.findOne(id);
    await character.destroy();
    return { message: `${id} character removed.` };
  }

}
