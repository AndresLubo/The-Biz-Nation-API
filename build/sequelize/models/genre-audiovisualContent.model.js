"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreAudiovisualContent = exports.GenreAudiovisualContentSchema = exports.GENRE_AUDIOVISUAL_CONTENT_TABLE = void 0;
const sequelize_1 = require("sequelize");
const genre_model_1 = require("./genre.model");
const audiovisualContent_model_1 = require("./audiovisualContent.model");
exports.GENRE_AUDIOVISUAL_CONTENT_TABLE = 'genre_audiovisual_contents';
exports.GenreAudiovisualContentSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    genreId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'genre_id',
        references: {
            model: genre_model_1.GENRE_TABLE,
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
class GenreAudiovisualContent extends sequelize_1.Model {
    static config(sequelize) {
        const config = {
            sequelize: sequelize,
            tableName: exports.GENRE_AUDIOVISUAL_CONTENT_TABLE,
            modelName: 'GenreAudiovisualContent',
            timestamps: false
        };
        return config;
    }
}
exports.GenreAudiovisualContent = GenreAudiovisualContent;
