import { QueryInterface } from "sequelize";
import { CharacterSchema, CHARACTER_TABLE } from "../models/character.model";
import { AudiovisualContentSchema, AUDIOVISUAL_CONTENT_TABLE } from "../models/audiovisualContent.model";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
    await queryInterface.createTable(AUDIOVISUAL_CONTENT_TABLE, AudiovisualContentSchema);
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable(CHARACTER_TABLE);
    await queryInterface.dropTable(AUDIOVISUAL_CONTENT_TABLE);
  }
};
