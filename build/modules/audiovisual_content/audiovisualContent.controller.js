"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audiovisualContentController = void 0;
const express_1 = require("express");
const audiovisualContent_service_1 = require("./audiovisualContent.service");
const validator_handler_1 = require("../../middlewares/validator.handler");
const audiovisualContent_dto_1 = require("./audiovisualContent.dto");
const service = audiovisualContent_service_1.AudiovisualContentService.create();
exports.audiovisualContentController = (0, express_1.Router)();
exports.audiovisualContentController.get('/', (0, validator_handler_1.validatorHandler)(audiovisualContent_dto_1.queryFiltersDto, validator_handler_1.propertySchema.QUERY), async (req, res, next) => {
    try {
        const filters = req.query;
        const movies = await service.findAll(filters);
        res.status(200).json(movies);
    }
    catch (error) {
        next(error);
    }
});
exports.audiovisualContentController.get('/:id', (0, validator_handler_1.validatorHandler)(audiovisualContent_dto_1.getAudiovisualContentDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.audiovisualContentController.post('/', (0, validator_handler_1.validatorHandler)(audiovisualContent_dto_1.createAudiovisualContentDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
    try {
        const data = req.body;
        const response = await service.create(data);
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.audiovisualContentController.put('/:id', (0, validator_handler_1.validatorHandler)(audiovisualContent_dto_1.getAudiovisualContentDto, validator_handler_1.propertySchema.PARAMS), (0, validator_handler_1.validatorHandler)(audiovisualContent_dto_1.updateAudiovisualContentDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
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
exports.audiovisualContentController.delete('/:id', (0, validator_handler_1.validatorHandler)(audiovisualContent_dto_1.getAudiovisualContentDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.delete(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
