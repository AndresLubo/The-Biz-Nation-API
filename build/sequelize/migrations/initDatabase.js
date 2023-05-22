"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_model_1 = require("../models/character.model");
const audiovisualContent_model_1 = require("../models/audiovisualContent.model");
const genre_model_1 = require("../models/genre.model");
const user_model_1 = require("../models/user.model");
const collaborations_model_1 = require("../models/collaborations.model");
const genre_audiovisualContent_model_1 = require("../models/genre-audiovisualContent.model");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(character_model_1.CHARACTER_TABLE, character_model_1.CharacterSchema);
        await queryInterface.createTable(audiovisualContent_model_1.AUDIOVISUAL_CONTENT_TABLE, audiovisualContent_model_1.AudiovisualContentSchema);
        await queryInterface.createTable(genre_model_1.GENRE_TABLE, genre_model_1.GenreSchema);
        await queryInterface.createTable(user_model_1.USER_TABLE, user_model_1.UserSchema);
        await queryInterface.createTable(collaborations_model_1.COLLABORATION_TABLE, collaborations_model_1.CollaborationSchema);
        await queryInterface.createTable(genre_audiovisualContent_model_1.GENRE_AUDIOVISUAL_CONTENT_TABLE, genre_audiovisualContent_model_1.GenreAudiovisualContentSchema);
    },
    async down(queryInterface) {
        await queryInterface.dropTable(character_model_1.CHARACTER_TABLE);
        await queryInterface.dropTable(audiovisualContent_model_1.AUDIOVISUAL_CONTENT_TABLE);
        await queryInterface.dropTable(genre_model_1.GENRE_TABLE);
        await queryInterface.dropTable(user_model_1.USER_TABLE);
        await queryInterface.dropTable(collaborations_model_1.COLLABORATION_TABLE);
        await queryInterface.dropTable(genre_audiovisualContent_model_1.GENRE_AUDIOVISUAL_CONTENT_TABLE);
    }
};
