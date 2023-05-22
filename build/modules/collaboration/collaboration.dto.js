"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCollaborationDto = exports.createCollaborationDto = exports.getCollaborationDto = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().integer();
const characterId = joi_1.default.number().integer();
const audiovisualContentId = joi_1.default.number().integer();
exports.getCollaborationDto = joi_1.default.object({
    id: id.required()
});
exports.createCollaborationDto = joi_1.default.object({
    characterId: characterId.required(),
    audiovisualContentId: audiovisualContentId.required()
});
exports.updateCollaborationDto = joi_1.default.object({
    characterId: characterId,
    audiovisualContentId: audiovisualContentId
});
