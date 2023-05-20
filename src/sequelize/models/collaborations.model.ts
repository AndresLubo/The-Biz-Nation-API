import { Model, DataTypes, Sequelize } from 'sequelize';

import { CHARACTER_TABLE } from './character.model';
import { AUDIOVISUAL_CONTENT_TABLE } from './audiovisualContent.model';
import { configModelSequelize } from '../../utils/types/config.model.sequelize';

/**
 * This model is the table that will handle the N to N
 * relationship of characters and audio-visual content (movies or series).
 *
 */

export const COLLABORATION_TABLE = 'collaborations';

export const CollaborationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  characterId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'character_id',
    references: {
      model: CHARACTER_TABLE,
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
}


export class Collaboration extends Model {
  static config(sequelize: Sequelize): configModelSequelize {
    const config: configModelSequelize = {
      sequelize: sequelize,
      tableName: COLLABORATION_TABLE,
      modelName: 'Collaboration',
      timestamps: false
    };

    return config;
  }
}
