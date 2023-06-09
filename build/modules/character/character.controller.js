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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterController = void 0;
const express_1 = require("express");
const character_service_1 = require("./character.service");
const validator_handler_1 = require("../../middlewares/validator.handler");
const character_dto_1 = require("./character.dto");
const passport_1 = __importDefault(require("passport"));
const service = character_service_1.CharacterService.create();
exports.characterController = (0, express_1.Router)();
exports.characterController.get('/', passport_1.default.authenticate('jwt', { session: false }), (0, validator_handler_1.validatorHandler)(character_dto_1.queryFiltersDto, validator_handler_1.propertySchema.QUERY), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = req.query;
        const characters = yield service.findAll(filters);
        res.status(200).json(characters);
    }
    catch (error) {
        next(error);
    }
}));
exports.characterController.get('/:id', passport_1.default.authenticate('jwt', { session: false }), (0, validator_handler_1.validatorHandler)(character_dto_1.getCharacterDto, validator_handler_1.propertySchema.PARAMS), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const character = yield service.findOne(parseInt(id));
        res.status(200).json(character);
    }
    catch (error) {
        next(error);
    }
}));
exports.characterController.post('/', passport_1.default.authenticate('jwt', { session: false }), (0, validator_handler_1.validatorHandler)(character_dto_1.createCharacterDto, validator_handler_1.propertySchema.BODY), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const response = yield service.create(data);
        res.status(201).json(response);
    }
    catch (error) {
        next(error);
    }
}));
exports.characterController.put('/:id', passport_1.default.authenticate('jwt', { session: false }), (0, validator_handler_1.validatorHandler)(character_dto_1.getCharacterDto, validator_handler_1.propertySchema.PARAMS), (0, validator_handler_1.validatorHandler)(character_dto_1.updateCharacterDto, validator_handler_1.propertySchema.BODY), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.characterController.delete('/:id', passport_1.default.authenticate('jwt', { session: false }), (0, validator_handler_1.validatorHandler)(character_dto_1.getCharacterDto, validator_handler_1.propertySchema.PARAMS), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield service.delete(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
}));
