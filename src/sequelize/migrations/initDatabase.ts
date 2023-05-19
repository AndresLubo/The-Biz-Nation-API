import { QueryInterface } from "sequelize";

import { CharacterSchema, CHARACTER_TABLE } from "../models/character.model";
import { AudiovisualContentSchema, AUDIOVISUAL_CONTENT_TABLE } from "../models/audiovisualContent.model";
import { GenreSchema, GENRE_TABLE } from "../models/genre.model";
import { UserSchema, USER_TABLE } from "../models/user.model";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
    await queryInterface.createTable(AUDIOVISUAL_CONTENT_TABLE, AudiovisualContentSchema);
    await queryInterface.createTable(GENRE_TABLE, GenreSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable(CHARACTER_TABLE);
    await queryInterface.dropTable(AUDIOVISUAL_CONTENT_TABLE);
    await queryInterface.dropTable(GENRE_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  }
};
