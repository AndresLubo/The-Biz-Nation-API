"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_model_1 = require("../models/character.model");
const audiovisualContent_model_1 = require("../models/audiovisualContent.model");
const genre_model_1 = require("../models/genre.model");
const user_model_1 = require("../models/user.model");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable(character_model_1.CHARACTER_TABLE, character_model_1.CharacterSchema);
            yield queryInterface.createTable(audiovisualContent_model_1.AUDIOVISUAL_CONTENT_TABLE, audiovisualContent_model_1.AudiovisualContentSchema);
            yield queryInterface.createTable(genre_model_1.GENRE_TABLE, genre_model_1.GenreSchema);
            yield queryInterface.createTable(user_model_1.USER_TABLE, user_model_1.UserSchema);
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable(character_model_1.CHARACTER_TABLE);
            yield queryInterface.dropTable(audiovisualContent_model_1.AUDIOVISUAL_CONTENT_TABLE);
            yield queryInterface.dropTable(genre_model_1.GENRE_TABLE);
            yield queryInterface.dropTable(user_model_1.USER_TABLE);
        });
    }
};
