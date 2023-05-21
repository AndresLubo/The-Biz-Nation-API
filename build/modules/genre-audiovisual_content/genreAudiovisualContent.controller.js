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
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreAudiovisualContentController = void 0;
const express_1 = require("express");
const genreAudiovisualContent_service_1 = require("./genreAudiovisualContent.service");
const validator_handler_1 = require("../../middlewares/validator.handler");
const genreAudiovisualContent_dto_1 = require("./genreAudiovisualContent.dto");
const service = genreAudiovisualContent_service_1.GenreAudiovisualContentService.create();
exports.genreAudiovisualContentController = (0, express_1.Router)();
exports.genreAudiovisualContentController.get('/:id', (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.getGenreAudiovisualContentDto, validator_handler_1.propertySchema.PARAMS), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const register = yield service.findOne(parseInt(id));
        res.status(200).json(register);
    }
    catch (error) {
        next(error);
    }
}));
exports.genreAudiovisualContentController.post('/', (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.createGenreAudiovisualContentDto, validator_handler_1.propertySchema.BODY), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const response = yield service.create(data);
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
}));
exports.genreAudiovisualContentController.put('/:id', (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.getGenreAudiovisualContentDto, validator_handler_1.propertySchema.PARAMS), (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.updateGenreAudiovisualContentDto, validator_handler_1.propertySchema.BODY), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const changes = req.body;
        const response = yield service.update(parseInt(id), changes);
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
}));
exports.genreAudiovisualContentController.delete('/:id', (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.getGenreAudiovisualContentDto, validator_handler_1.propertySchema.PARAMS), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield service.delete(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
}));
