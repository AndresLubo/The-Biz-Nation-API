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
exports.CharacterService = void 0;
const sequelize_index_1 = require("../../sequelize/sequelize.index");
const boom_1 = __importDefault(require("@hapi/boom"));
const { models } = sequelize_index_1.sequelize;
class CharacterService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static create() {
        if (CharacterService.instance === null)
            CharacterService.instance = new CharacterService();
        return CharacterService.instance;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = yield models.Character.findAll({
                attributes: {
                    exclude: [],
                },
            });
            return characters;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield models.Character.findByPk(id, {});
            if (!character)
                throw boom_1.default.notFound(`The character with id ${id} does not exist.`);
            return character;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCharacter = yield models.Character.create(data);
            return newCharacter;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield this.findOne(id);
            const response = yield character.update(changes);
            return response;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield this.findOne(id);
            yield character.destroy();
            return { message: `${id} character removed.` };
        });
    }
}
CharacterService.instance = null;
exports.CharacterService = CharacterService;
