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
exports.authController = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_dto_1 = require("./auth.dto");
const validator_handler_1 = require("../../middlewares/validator.handler");
const auth_service_1 = require("./auth.service");
const user_service_1 = require("../user/user.service");
const user_dto_1 = require("../user/user.dto");
const service = auth_service_1.AuthService.create();
const userService = user_service_1.UserService.create();
exports.authController = (0, express_1.Router)();
exports.authController.post('/login', (0, validator_handler_1.validatorHandler)(auth_dto_1.login, validator_handler_1.propertySchema.BODY), passport_1.default.authenticate('local', { session: false }), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        res.json(service.signToken(user));
    }
    catch (error) {
        next(error);
    }
}));
exports.authController.post('/register', (0, validator_handler_1.validatorHandler)(user_dto_1.createUserDto, validator_handler_1.propertySchema.BODY), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const rta = yield userService.create(user);
        res.status(201).json(rta);
    }
    catch (error) {
        next(error);
    }
}));
