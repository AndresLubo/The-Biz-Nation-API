"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryFiltersDto = exports.updateCharacterDto = exports.createCharacterDto = exports.getCharacterDto = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().integer();
const image = joi_1.default.string().uri();
const name = joi_1.default.string().max(39);
const age = joi_1.default.number().integer();
const weight = joi_1.default.number().integer();
const history = joi_1.default.string();
exports.getCharacterDto = joi_1.default.object({
    id: id.required(),
});
exports.createCharacterDto = joi_1.default.object({
    image: image.required(),
    name: name.required(),
    age: age.required(),
    weight: weight.required(),
    history: history.required(),
});
exports.updateCharacterDto = joi_1.default.object({
    image: image,
    name: name,
    age: age,
    weight: weight,
    history: history
});
exports.queryFiltersDto = joi_1.default.object({
    name: name,
    age: age,
    movie: id
});
