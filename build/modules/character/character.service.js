"use strict";
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
    async findAll(query) {
        let where = {};
        if (query.movie)
            where = { ...where, '$collaborations.collaboration.id$': query.movie };
        if (query.name)
            where = { ...where, name: query.name };
        if (query.age)
            where = { ...where, age: query.age };
        const options = {
            attributes: {
                exclude: ['history', 'age', 'weight'],
            },
            include: [{
                    association: 'collaborations'
                }],
            where: { ...where }
        };
        const characters = await models.Character.findAll(options);
        return characters;
    }
    async findOne(id) {
        const character = await models.Character.findByPk(id, {
            include: [{
                    association: 'collaborations',
                    attributes: { exclude: [] }
                }]
        });
        if (!character)
            throw boom_1.default.notFound(`The character with id ${id} does not exist.`);
        return character;
    }
    async create(data) {
        const newCharacter = await models.Character.create(data);
        return newCharacter;
    }
    async update(id, changes) {
        const character = await this.findOne(id);
        const response = await character.update(changes);
        return response;
    }
    async delete(id) {
        const character = await this.findOne(id);
        await character.destroy();
        return { message: `${id} character removed.` };
    }
}
CharacterService.instance = null;
exports.CharacterService = CharacterService;
