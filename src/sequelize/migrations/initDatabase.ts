import { QueryInterface } from "sequelize";

import { CharacterSchema, CHARACTER_TABLE } from "../models/character.model";
import { AudiovisualContentSchema, AUDIOVISUAL_CONTENT_TABLE } from "../models/audiovisualContent.model";
import { GenreSchema, GENRE_TABLE } from "../models/genre.model";
import { UserSchema, USER_TABLE } from "../models/user.model";
import { CollaborationSchema, COLLABORATION_TABLE } from '../models/collaborations.model';
import { GENRE_AUDIOVISUAL_CONTENT_TABLE, GenreAudiovisualContentSchema } from "../models/genre-audiovisualContent.model";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
    await queryInterface.createTable(AUDIOVISUAL_CONTENT_TABLE, AudiovisualContentSchema);
    await queryInterface.createTable(GENRE_TABLE, GenreSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(COLLABORATION_TABLE, CollaborationSchema);
    await queryInterface.createTable(GENRE_AUDIOVISUAL_CONTENT_TABLE, GenreAudiovisualContentSchema);
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable(CHARACTER_TABLE);
    await queryInterface.dropTable(AUDIOVISUAL_CONTENT_TABLE);
    await queryInterface.dropTable(GENRE_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(COLLABORATION_TABLE);
    await queryInterface.dropTable(GENRE_AUDIOVISUAL_CONTENT_TABLE);
  }
};
