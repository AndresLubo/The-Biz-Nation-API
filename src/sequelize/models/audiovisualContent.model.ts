import { Model, DataTypes, Sequelize } from "sequelize";
import { configModelSequelize } from "../../utils/types/config.model.sequelize";

export const AUDIOVISUAL_CONTENT_TABLE = 'audiovisual_contents';

export const AudiovisualContentSchema = {
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
  title: {
    allowNull: false,
    type: DataTypes.STRING(40),
  },
  creationDate: {
    field: 'creation_date',
    allowNull: false,
    type: DataTypes.DATE
  },
  rating: {
    allowNull: false,
    type: DataTypes.NUMBER
  }
};

export class AudiovisualContent extends Model {
  static associate(models: any): void{
    this.belongsToMany(models.Character, {
      as: 'collaborations',
      through: models.Collaboration,
      foreignKey: 'audiovisualContentId',
      otherKey: 'characterId',
    })
  }

  static config(sequelize: Sequelize): configModelSequelize{

    const config: configModelSequelize = {
      sequelize: sequelize,
      tableName: AUDIOVISUAL_CONTENT_TABLE,
      modelName: 'AudiovisualContent',
      timestamps: false
    };

    return config;
  }
}
