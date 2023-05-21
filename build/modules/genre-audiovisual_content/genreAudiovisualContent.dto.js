"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGenreAudiovisualContentDto = exports.createGenreAudiovisualContentDto = exports.getGenreAudiovisualContentDto = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().integer();
const genreId = joi_1.default.number().integer();
const audiovisualContentId = joi_1.default.number().integer();
exports.getGenreAudiovisualContentDto = joi_1.default.object({
    id: id.required()
});
exports.createGenreAudiovisualContentDto = joi_1.default.object({
    genreId: genreId.required(),
    audiovisualContentId: audiovisualContentId.required()
});
exports.updateGenreAudiovisualContentDto = joi_1.default.object({
    genreId: genreId,
    audiovisualContentId: audiovisualContentId
});
