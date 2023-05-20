import { Model } from "sequelize";
import { sequelize } from "../../sequelize/sequelize.index";
import { Character, CreateCharacter, UpdateCharacter } from "../../utils/types/character.type";
import boom from "@hapi/boom";

const { models } = sequelize;


export class CharacterService {
  static instance: CharacterService | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor(){}
  static create(){
    if (CharacterService.instance === null) CharacterService.instance = new CharacterService();
    return CharacterService.instance;
  }

  async findAll(): Promise<Model<Character>[]>{
    const characters: Model<Character>[] = await models.Character.findAll({
      attributes: {
        exclude: [],
      },
    });

    return characters;
  }

  async findOne(id: number): Promise<Model<Character>>{
    const character: Model<Character> | null = await models.Character.findByPk(id, {});

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
