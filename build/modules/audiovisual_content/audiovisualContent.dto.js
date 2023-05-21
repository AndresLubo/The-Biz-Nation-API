"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryFiltersDto = exports.updateAudiovisualContentDto = exports.createAudiovisualContentDto = exports.getAudiovisualContentDto = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().integer();
const image = joi_1.default.string().uri();
const title = joi_1.default.string().max(39);
const creationDate = joi_1.default.date();
const rating = joi_1.default.number().integer();
const order = joi_1.default.string().valid('DESC', 'ASC');
exports.getAudiovisualContentDto = joi_1.default.object({
    id: id.required(),
});
exports.createAudiovisualContentDto = joi_1.default.object({
    image: image.required(),
    title: title.required(),
    creationDate: creationDate.required(),
    rating: rating.required(),
});
exports.updateAudiovisualContentDto = joi_1.default.object({
    image: image,
    title: title,
    creationDate: creationDate,
    rating: rating
});
exports.queryFiltersDto = joi_1.default.object({
    title: title,
    genre: id,
    order: order
});
