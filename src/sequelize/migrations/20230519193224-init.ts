import { QueryInterface } from "sequelize";
import { CharacterSchema, CHARACTER_TABLE } from "../models/character.model";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable(CHARACTER_TABLE);
  }
};
