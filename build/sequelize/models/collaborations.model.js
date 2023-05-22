"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collaboration = exports.CollaborationSchema = exports.COLLABORATION_TABLE = void 0;
const sequelize_1 = require("sequelize");
const character_model_1 = require("./character.model");
const audiovisualContent_model_1 = require("./audiovisualContent.model");
/**
 * This model is the table that will handle the N to N
 * relationship of characters and audio-visual content (movies or series).
 *
 */
exports.COLLABORATION_TABLE = 'collaborations';
exports.CollaborationSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    characterId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'character_id',
        references: {
            model: character_model_1.CHARACTER_TABLE,
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    audiovisualContentId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'audiovisual_content_id',
        references: {
            model: audiovisualContent_model_1.AUDIOVISUAL_CONTENT_TABLE,
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
};
class Collaboration extends sequelize_1.Model {
    static config(sequelize) {
        const config = {
            sequelize: sequelize,
            tableName: exports.COLLABORATION_TABLE,
            modelName: 'Collaboration',
            timestamps: false
        };
        return config;
    }
}
exports.Collaboration = Collaboration;
