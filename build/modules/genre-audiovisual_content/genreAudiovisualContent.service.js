"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreAudiovisualContentService = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const sequelize_index_1 = require("../../sequelize/sequelize.index");
const genre_service_1 = require("../genre/genre.service");
const audiovisualContent_service_1 = require("../audiovisual_content/audiovisualContent.service");
const genreService = genre_service_1.GenreService.create();
const audiovisualContentService = audiovisualContent_service_1.AudiovisualContentService.create();
const { models } = sequelize_index_1.sequelize;
class GenreAudiovisualContentService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static create() {
        if (GenreAudiovisualContentService.instance === null)
            GenreAudiovisualContentService.instance =
                new GenreAudiovisualContentService();
        return GenreAudiovisualContentService.instance;
    }
    async findOne(id) {
        const response = await models.GenreAudiovisualContent.findByPk(id);
        if (!response)
            throw boom_1.default.notFound(`The genre-audiovisual content with id ${id} does not exist.`);
        return response;
    }
    async create(data) {
        await genreService.findOne(data.genreId);
        await audiovisualContentService.findOne(data.audiovisualContentId);
        const newRegister = await models.GenreAudiovisualContent.create(data);
        return newRegister;
    }
    async update(id, changes) {
        if (changes.genreId !== undefined)
            await genreService.findOne(changes.genreId);
        if (changes.audiovisualContentId !== undefined)
            await audiovisualContentService.findOne(changes.audiovisualContentId);
        const register = await this.findOne(id);
        const newRegister = await register.update({ ...register, ...changes });
        return newRegister;
    }
    async delete(id) {
        const register = await this.findOne(id);
        await register.destroy();
        return { message: `${id} genre-audiovisual content removed.` };
    }
}
GenreAudiovisualContentService.instance = null;
exports.GenreAudiovisualContentService = GenreAudiovisualContentService;
