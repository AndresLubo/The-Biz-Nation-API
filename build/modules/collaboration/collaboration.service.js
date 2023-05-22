"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaborationService = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const sequelize_index_1 = require("../../sequelize/sequelize.index");
const character_service_1 = require("../character/character.service");
const audiovisualContent_service_1 = require("../audiovisual_content/audiovisualContent.service");
const characterService = character_service_1.CharacterService.create();
const audiovisualContentService = audiovisualContent_service_1.AudiovisualContentService.create();
const { models } = sequelize_index_1.sequelize;
class CollaborationService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static create() {
        if (CollaborationService.instance === null)
            CollaborationService.instance = new CollaborationService();
        return CollaborationService.instance;
    }
    async findOne(id) {
        const collaboration = await models.Collaboration.findByPk(id);
        if (!collaboration)
            throw boom_1.default.notFound(`The collaboration with id ${id} does not exist.`);
        return collaboration;
    }
    async create(data) {
        await characterService.findOne(data.characterId);
        await audiovisualContentService.findOne(data.audiovisualContentId);
        const newCollaboration = await models.Collaboration.create(data);
        return newCollaboration;
    }
    async update(id, changes) {
        if (changes.characterId !== undefined)
            await characterService.findOne(changes.characterId);
        if (changes.audiovisualContentId !== undefined)
            await characterService.findOne(changes.audiovisualContentId);
        const collaboration = await this.findOne(id);
        const newCollaboration = await collaboration.update(changes);
        return newCollaboration;
    }
    async delete(id) {
        const collaboration = await this.findOne(id);
        await collaboration.destroy();
        return { message: `${id} collaboration removed.` };
    }
}
CollaborationService.instance = null;
exports.CollaborationService = CollaborationService;
