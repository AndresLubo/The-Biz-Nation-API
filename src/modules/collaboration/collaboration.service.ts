import { Model } from 'sequelize';
import boom from '@hapi/boom';

import { sequelize } from '../../sequelize/sequelize.index';
import { Collaboration, CreateCollaboration, UpdateCollaboration } from '../../utils/types/collaboration.type';

import { CharacterService } from '../character/character.service';
import { AudiovisualContentService } from '../audiovisual_content/audiovisualContent.service';

const characterService = CharacterService.create();
const audiovisualContentService = AudiovisualContentService.create();

const { models } = sequelize;


export class CollaborationService {
  static instance: CollaborationService | null = null;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor(){}
    static create(){
      if (CollaborationService.instance === null) CollaborationService.instance = new CollaborationService();
      return CollaborationService.instance;
    }

    async findOne(id: number): Promise<Model<Collaboration>>{
      const collaboration: Model<Collaboration> | null = await models.Collaboration.findByPk(id);

      if (!collaboration) throw boom.notFound(`The collaboration with id ${id} does not exist.`)
      return collaboration;
    }

    async create(data: CreateCollaboration): Promise<Model<Collaboration>> {
      await characterService.findOne(data.characterId);
      await audiovisualContentService.findOne(data.audiovisualContentId);

      const newCollaboration: Model<Collaboration> = await models.Collaboration.create(data);
      return newCollaboration;
    }

    async update(id: number, changes: UpdateCollaboration): Promise<Model<Collaboration>> {

      if (changes.characterId !== undefined) await characterService.findOne(changes.characterId)
      if (changes.audiovisualContentId !== undefined) await characterService.findOne(changes.audiovisualContentId)

      const collaboration: Model<Collaboration> = await this.findOne(id);
      const newCollaboration = await collaboration.update(changes)
      return newCollaboration;
    }

    async delete(id: number){
      const collaboration = await this.findOne(id);
      await collaboration.destroy();
      return { message: `${id} collaboration removed.` };
    }
}

