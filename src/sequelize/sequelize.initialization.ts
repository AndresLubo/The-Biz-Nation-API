import { Sequelize } from "sequelize";

import { Character, CharacterSchema } from "./models/character.model";
import { AudiovisualContent, AudiovisualContentSchema } from "./models/audiovisualContent.model";

export const setupModels = (sequelize: Sequelize): void => {
  Character.init(CharacterSchema, Character.config(sequelize));
  AudiovisualContent.init(AudiovisualContentSchema, AudiovisualContent.config(sequelize));


  Character.associate(sequelize.models);
  AudiovisualContent.associate(sequelize.models);

};
