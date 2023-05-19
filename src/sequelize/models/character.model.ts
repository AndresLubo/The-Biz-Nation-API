import { Model, DataTypes, Sequelize } from "sequelize";
import { configModelSequelize } from "../../utils/types/config.model.sequelize";

export const CHARACTER_TABLE = 'characters';

export const CharacterSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(40),
  },
  age: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  weight: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  history: {
    allowNull: false,
    type: DataTypes.TEXT
  },

  // queda pendiente las colaboraciones

};

export class Character extends Model {
  static associate(models: any): void{
      //
  }

  static config(sequelize: Sequelize): configModelSequelize{

    const config: configModelSequelize = {
      sequelize: sequelize,
      tableName: CHARACTER_TABLE,
      modelName: 'Character',
      timestamp: false
    };

    return config;
  }
}
