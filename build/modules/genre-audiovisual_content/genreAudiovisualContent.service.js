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
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield models.GenreAudiovisualContent.findByPk(id);
            if (!response)
                throw boom_1.default.notFound(`The genre-audiovisual content with id ${id} does not exist.`);
            return response;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genreService.findOne(data.genreId);
            yield audiovisualContentService.findOne(data.audiovisualContentId);
            const newRegister = yield models.GenreAudiovisualContent.create(data);
            return newRegister;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (changes.genreId !== undefined)
                yield genreService.findOne(changes.genreId);
            if (changes.audiovisualContentId !== undefined)
                yield audiovisualContentService.findOne(changes.audiovisualContentId);
            const register = yield this.findOne(id);
            const newRegister = yield register.update(Object.assign(Object.assign({}, register), changes));
            return newRegister;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const register = yield this.findOne(id);
            yield register.destroy();
            return { message: `${id} genre-audiovisual content removed.` };
        });
    }
}
GenreAudiovisualContentService.instance = null;
exports.GenreAudiovisualContentService = GenreAudiovisualContentService;
