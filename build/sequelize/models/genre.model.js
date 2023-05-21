"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genre = exports.GenreSchema = exports.GENRE_TABLE = void 0;
const sequelize_1 = require("sequelize");
exports.GENRE_TABLE = 'genres';
exports.GenreSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    image: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(40),
    }
};
class Genre extends sequelize_1.Model {
    static associate(models) {
        this.belongsToMany(models.AudiovisualContent, {
            as: 'genreAudiovisualContent',
            through: models.GenreAudiovisualContent,
            foreignKey: 'genreId',
            otherKey: 'audiovisualContentId',
        });
    }
    static config(sequelize) {
        const config = {
            sequelize,
            tableName: exports.GENRE_TABLE,
            modelName: 'Genre',
            timestamps: false
        };
        return config;
    }
}
exports.Genre = Genre;
