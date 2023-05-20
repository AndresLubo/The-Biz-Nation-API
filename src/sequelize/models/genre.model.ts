import { Model, DataTypes, Sequelize } from "sequelize";
import { configModelSequelize } from "../../utils/types/config.model.sequelize";

export const GENRE_TABLE = 'genres';

export const GenreSchema = {
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
  }
};

export class Genre extends Model {
  static associate(models: any): void{
    this.belongsToMany(models.AudiovisualContent, {
      as: 'genreAudiovisualContent',
      through: models.GenreAudiovisualContent,
      foreignKey: 'genreId',
      otherKey: 'audiovisualContentId',
    })
  }

  static config(sequelize: Sequelize): configModelSequelize{

    const config: configModelSequelize = {
      sequelize,
      tableName: GENRE_TABLE,
      modelName: 'Genre',
      timestamps: false
    };

    return config;
  }
}
