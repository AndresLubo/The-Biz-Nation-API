"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupModels = void 0;
const character_model_1 = require("./models/character.model");
const audiovisualContent_model_1 = require("./models/audiovisualContent.model");
const genre_model_1 = require("./models/genre.model");
const user_model_1 = require("./models/user.model");
const setupModels = (sequelize) => {
    character_model_1.Character.init(character_model_1.CharacterSchema, character_model_1.Character.config(sequelize));
    audiovisualContent_model_1.AudiovisualContent.init(audiovisualContent_model_1.AudiovisualContentSchema, audiovisualContent_model_1.AudiovisualContent.config(sequelize));
    genre_model_1.Genre.init(genre_model_1.GenreSchema, genre_model_1.Genre.config(sequelize));
    user_model_1.User.init(user_model_1.UserSchema, user_model_1.User.config(sequelize));
    character_model_1.Character.associate(sequelize.models);
    audiovisualContent_model_1.AudiovisualContent.associate(sequelize.models);
    genre_model_1.Genre.associate(sequelize.models);
    user_model_1.User.associate(sequelize.models);
};
exports.setupModels = setupModels;
