"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterController = void 0;
const express_1 = require("express");
const character_service_1 = require("./character.service");
const validator_handler_1 = require("../../middlewares/validator.handler");
const character_dto_1 = require("./character.dto");
const service = character_service_1.CharacterService.create();
exports.characterController = (0, express_1.Router)();
exports.characterController.get('/', (0, validator_handler_1.validatorHandler)(character_dto_1.queryFiltersDto, validator_handler_1.propertySchema.QUERY), async (req, res, next) => {
    try {
        const filters = req.query;
        const characters = await service.findAll(filters);
        res.status(200).json(characters);
    }
    catch (error) {
        next(error);
    }
});
exports.characterController.get('/:id', (0, validator_handler_1.validatorHandler)(character_dto_1.getCharacterDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const character = await service.findOne(parseInt(id));
        res.status(200).json(character);
    }
    catch (error) {
        next(error);
    }
});
exports.characterController.post('/', (0, validator_handler_1.validatorHandler)(character_dto_1.createCharacterDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
    try {
        const data = req.body;
        const response = await service.create(data);
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.characterController.put('/:id', (0, validator_handler_1.validatorHandler)(character_dto_1.getCharacterDto, validator_handler_1.propertySchema.PARAMS), (0, validator_handler_1.validatorHandler)(character_dto_1.updateCharacterDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
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
exports.characterController.delete('/:id', (0, validator_handler_1.validatorHandler)(character_dto_1.getCharacterDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.delete(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
