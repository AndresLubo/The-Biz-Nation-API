"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiovisualContent = exports.AudiovisualContentSchema = exports.AUDIOVISUAL_CONTENT_TABLE = void 0;
const sequelize_1 = require("sequelize");
exports.AUDIOVISUAL_CONTENT_TABLE = 'audiovisual_contents';
exports.AudiovisualContentSchema = {
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
    title: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(40),
    },
    creationDate: {
        field: 'creation_date',
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    },
    rating: {
        allowNull: false,
        type: sequelize_1.DataTypes.DECIMAL
    }
    // queda pendiente los personajes
};
class AudiovisualContent extends sequelize_1.Model {
    static associate(models) {
        //
    }
    static config(sequelize) {
        const config = {
            sequelize: sequelize,
            tableName: exports.AUDIOVISUAL_CONTENT_TABLE,
            modelName: 'AudiovisualContent',
            timestamps: false
        };
        return config;
    }
}
exports.AudiovisualContent = AudiovisualContent;
