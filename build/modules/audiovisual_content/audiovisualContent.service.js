"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiovisualContentService = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const sequelize_index_1 = require("../../sequelize/sequelize.index");
const { models } = sequelize_index_1.sequelize;
class AudiovisualContentService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static create() {
        if (AudiovisualContentService.instance === null)
            AudiovisualContentService.instance = new AudiovisualContentService();
        return AudiovisualContentService.instance;
    }
    async findAll(query) {
        let where = {};
        let orderQuery;
        let thisOrder = [];
        if (query.title)
            where = { ...where, title: query.title };
        if (query.genre)
            where = { ...where, '$genreAudiovisualContent.id$': query.genre };
        if (query.order) {
            orderQuery = ['creationDate', query.order];
            thisOrder = [orderQuery];
        }
        const movies = await models.AudiovisualContent.findAll({
            attributes: {
                exclude: ['rating'],
            },
            include: ['genreAudiovisualContent'],
            where: { ...where },
            order: thisOrder
        });
        return movies;
    }
    async findOne(id) {
        const movie = await models.AudiovisualContent.findByPk(id, {
            include: [{
                    association: 'collaborations',
                    attributes: { exclude: ['Collaboration'] }
                }],
        });
        if (!movie)
            throw boom_1.default.notFound(`The audiovisual content with id ${id} does not exist.`);
        return movie;
    }
    async create(data) {
        const newMovie = await models.AudiovisualContent.create(data);
        return newMovie;
    }
    async update(id, changes) {
        const movie = await this.findOne(id);
        const response = await movie.update(changes);
        return response;
    }
    async delete(id) {
        const movie = await this.findOne(id);
        await movie.destroy();
        return { message: `${id} audiovisual content removed.` };
    }
}
AudiovisualContentService.instance = null;
exports.AudiovisualContentService = AudiovisualContentService;
