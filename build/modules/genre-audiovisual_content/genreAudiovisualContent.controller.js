"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreAudiovisualContentController = void 0;
const express_1 = require("express");
const genreAudiovisualContent_service_1 = require("./genreAudiovisualContent.service");
const validator_handler_1 = require("../../middlewares/validator.handler");
const genreAudiovisualContent_dto_1 = require("./genreAudiovisualContent.dto");
const service = genreAudiovisualContent_service_1.GenreAudiovisualContentService.create();
exports.genreAudiovisualContentController = (0, express_1.Router)();
exports.genreAudiovisualContentController.get('/:id', (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.getGenreAudiovisualContentDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const register = await service.findOne(parseInt(id));
        res.status(200).json(register);
    }
    catch (error) {
        next(error);
    }
});
exports.genreAudiovisualContentController.post('/', (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.createGenreAudiovisualContentDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
    try {
        const data = req.body;
        const response = await service.create(data);
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.genreAudiovisualContentController.put('/:id', (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.getGenreAudiovisualContentDto, validator_handler_1.propertySchema.PARAMS), (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.updateGenreAudiovisualContentDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
    try {
        const { id } = req.params;
        const changes = req.body;
        const response = await service.update(parseInt(id), changes);
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.genreAudiovisualContentController.delete('/:id', (0, validator_handler_1.validatorHandler)(genreAudiovisualContent_dto_1.getGenreAudiovisualContentDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.delete(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
