import { Sequelize } from "sequelize";

import { Character, CharacterSchema } from "./models/character.model";

export const setupModels = (sequelize: Sequelize): void => {
  Character.init(CharacterSchema, Character.config(sequelize));


  Character.associate(sequelize.models);

};
