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
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield models.AudiovisualContent.findAll({
                attributes: {
                    exclude: [],
                },
            });
            return movies;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield models.AudiovisualContent.findByPk(id, {});
            if (!movie)
                throw boom_1.default.notFound(`The audiovisual content with id ${id} does not exist.`);
            return movie;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMovie = yield models.AudiovisualContent.create(data);
            return newMovie;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield this.findOne(id);
            const response = yield movie.update(changes);
            return response;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield this.findOne(id);
            yield movie.destroy();
            return { message: `${id} audiovisual content removed.` };
        });
    }
}
AudiovisualContentService.instance = null;
exports.AudiovisualContentService = AudiovisualContentService;
