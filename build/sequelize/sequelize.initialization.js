"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupModels = void 0;
const character_model_1 = require("./models/character.model");
const setupModels = (sequelize) => {
    character_model_1.Character.init(character_model_1.CharacterSchema, character_model_1.Character.config(sequelize));
    character_model_1.Character.associate(sequelize.models);
};
exports.setupModels = setupModels;
