"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGenreDto = exports.createGenreContentDto = exports.getGenreDto = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().integer();
const name = joi_1.default.string().max(39);
const image = joi_1.default.string().uri();
exports.getGenreDto = joi_1.default.object({
    id: id.required(),
});
exports.createGenreContentDto = joi_1.default.object({
    image: image.required(),
    name: name.required()
});
exports.updateGenreDto = joi_1.default.object({
    image: image,
    name: name,
});
