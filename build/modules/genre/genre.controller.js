"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreController = void 0;
const express_1 = require("express");
const genre_service_1 = require("./genre.service");
const validator_handler_1 = require("../../middlewares/validator.handler");
const genre_dto_1 = require("./genre.dto");
const service = genre_service_1.GenreService.create();
exports.genreController = (0, express_1.Router)();
exports.genreController.get('/', async (req, res, next) => {
    try {
        const genres = await service.findAll();
        res.status(200).json(genres);
    }
    catch (error) {
        next(error);
    }
});
exports.genreController.get('/:id', (0, validator_handler_1.validatorHandler)(genre_dto_1.getGenreDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const genre = await service.findOne(parseInt(id));
        res.status(200).json(genre);
    }
    catch (error) {
        next(error);
    }
});
exports.genreController.post('/', (0, validator_handler_1.validatorHandler)(genre_dto_1.createGenreContentDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
    try {
        const data = req.body;
        const response = await service.create(data);
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.genreController.put('/:id', (0, validator_handler_1.validatorHandler)(genre_dto_1.getGenreDto, validator_handler_1.propertySchema.PARAMS), (0, validator_handler_1.validatorHandler)(genre_dto_1.updateGenreDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
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
exports.genreController.delete('/:id', (0, validator_handler_1.validatorHandler)(genre_dto_1.getGenreDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.delete(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
