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
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const genres = yield models.Genre.findAll();
            return genres;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const genre = yield models.Genre.findByPk(id);
            if (!genre)
                throw boom_1.default.notFound(`The genre with id ${id} does not exist.`);
            return genre;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newGenre = yield models.Genre.create(data);
            return newGenre;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const genre = yield this.findOne(id);
            const newGenre = genre.update(changes);
            return newGenre;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const genre = yield this.findOne(id);
            yield genre.destroy();
            return { message: `${id} genre removed.` };
        });
    }
}
GenreService.instance = null;
exports.GenreService = GenreService;
