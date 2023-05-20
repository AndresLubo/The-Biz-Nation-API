import { Model, DataTypes, Sequelize } from 'sequelize';

import { GENRE_TABLE } from './genre.model';
import { AUDIOVISUAL_CONTENT_TABLE } from './audiovisualContent.model';
import { configModelSequelize } from '../../utils/types/config.model.sequelize';

export const GENRE_AUDIOVISUAL_CONTENT_TABLE = 'genre_audiovisual_contents';

export const GenreAudiovisualContentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  genreId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'genre_id',
    references: {
      model: GENRE_TABLE,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  audiovisualContentId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'audiovisual_content_id',
    references: {
      model: AUDIOVISUAL_CONTENT_TABLE,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
};


export class GenreAudiovisualContent extends Model {
  static config(sequelize: Sequelize): configModelSequelize {
    const config: configModelSequelize = {
      sequelize: sequelize,
      tableName: GENRE_AUDIOVISUAL_CONTENT_TABLE,
      modelName: 'GenreAudiovisualContent',
      timestamps: false
    };

    return config;
  }
}
