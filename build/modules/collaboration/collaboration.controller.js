"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collaborationController = void 0;
const express_1 = require("express");
const collaboration_service_1 = require("./collaboration.service");
const validator_handler_1 = require("../../middlewares/validator.handler");
const collaboration_dto_1 = require("./collaboration.dto");
const service = collaboration_service_1.CollaborationService.create();
exports.collaborationController = (0, express_1.Router)();
exports.collaborationController.get('/:id', (0, validator_handler_1.validatorHandler)(collaboration_dto_1.getCollaborationDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const collaborarion = await service.findOne(parseInt(id));
        res.status(200).json(collaborarion);
    }
    catch (error) {
        next(error);
    }
});
exports.collaborationController.post('/', (0, validator_handler_1.validatorHandler)(collaboration_dto_1.createCollaborationDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
    try {
        const data = req.body;
        const response = await service.create(data);
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
});
exports.collaborationController.put('/:id', (0, validator_handler_1.validatorHandler)(collaboration_dto_1.getCollaborationDto, validator_handler_1.propertySchema.PARAMS), (0, validator_handler_1.validatorHandler)(collaboration_dto_1.updateCollaborationDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
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
exports.collaborationController.delete('/:id', (0, validator_handler_1.validatorHandler)(collaboration_dto_1.getCollaborationDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.delete(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
