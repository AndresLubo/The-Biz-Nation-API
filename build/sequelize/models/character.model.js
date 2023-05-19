"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = exports.CharacterSchema = exports.CHARACTER_TABLE = void 0;
const sequelize_1 = require("sequelize");
exports.CHARACTER_TABLE = 'characters';
exports.CharacterSchema = {
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
    },
    age: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER
    },
    weight: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER
    },
    history: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT
    },
    // queda pendiente las colaboraciones
};
class Character extends sequelize_1.Model {
    static associate(models) {
        //
    }
    static config(sequelize) {
        const config = {
            sequelize: sequelize,
            tableName: exports.CHARACTER_TABLE,
            modelName: 'Character',
            timestamp: false
        };
        return config;
    }
}
exports.Character = Character;
