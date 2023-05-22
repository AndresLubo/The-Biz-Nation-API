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
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collaboration = yield models.Collaboration.findByPk(id);
            if (!collaboration)
                throw boom_1.default.notFound(`The collaboration with id ${id} does not exist.`);
            return collaboration;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield characterService.findOne(data.characterId);
            yield audiovisualContentService.findOne(data.audiovisualContentId);
            const newCollaboration = yield models.Collaboration.create(data);
            return newCollaboration;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (changes.characterId !== undefined)
                yield characterService.findOne(changes.characterId);
            if (changes.audiovisualContentId !== undefined)
                yield characterService.findOne(changes.audiovisualContentId);
            const collaboration = yield this.findOne(id);
            const newCollaboration = yield collaboration.update(changes);
            return newCollaboration;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collaboration = yield this.findOne(id);
            yield collaboration.destroy();
            return { message: `${id} collaboration removed.` };
        });
    }
}
CollaborationService.instance = null;
exports.CollaborationService = CollaborationService;
