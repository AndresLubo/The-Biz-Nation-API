"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreService = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const sequelize_index_1 = require("../../sequelize/sequelize.index");
const { models } = sequelize_index_1.sequelize;
class GenreService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static create() {
        if (GenreService.instance === null)
            GenreService.instance = new GenreService();
        return GenreService.instance;
    }
    async findAll() {
        const genres = await models.Genre.findAll();
        return genres;
    }
    async findOne(id) {
        const genre = await models.Genre.findByPk(id);
        if (!genre)
            throw boom_1.default.notFound(`The genre with id ${id} does not exist.`);
        return genre;
    }
    async create(data) {
        const newGenre = await models.Genre.create(data);
        return newGenre;
    }
    async update(id, changes) {
        const genre = await this.findOne(id);
        const newGenre = genre.update(changes);
        return newGenre;
    }
    async delete(id) {
        const genre = await this.findOne(id);
        await genre.destroy();
        return { message: `${id} genre removed.` };
    }
}
GenreService.instance = null;
exports.GenreService = GenreService;
