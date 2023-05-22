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
exports.userController = void 0;
const express_1 = require("express");
const user_service_1 = require("./user.service");
const validator_handler_1 = require("../../middlewares/validator.handler");
const user_dto_1 = require("./user.dto");
const passport_1 = __importDefault(require("passport"));
const service = user_service_1.UserService.create();
exports.userController = (0, express_1.Router)();
exports.userController.get('/', passport_1.default.authenticate('jwt', { session: false }), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield service.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
}));
exports.userController.get('/:id', passport_1.default.authenticate('jwt', { session: false }), (0, validator_handler_1.validatorHandler)(user_dto_1.getUserDto, validator_handler_1.propertySchema.PARAMS), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield service.findOne(parseInt(id));
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
}));
// userController.post(
//   '/',
//   validatorHandler(createUserDto, propertySchema.BODY),
//   async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const data: CreateUser = req.body;
//       const create = await service.create(data);
//       res.status(201).json(create);
//     } catch (error) {
//       next(error);
//     }
//   }
// );
exports.userController.put('/:id', passport_1.default.authenticate('jwt', { session: false }), (0, validator_handler_1.validatorHandler)(user_dto_1.getUserDto, validator_handler_1.propertySchema.PARAMS), (0, validator_handler_1.validatorHandler)(user_dto_1.updateUserDto, validator_handler_1.propertySchema.BODY), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const changes = req.body;
        const rta = yield service.update(parseInt(id), changes);
        res.status(200).json(rta);
    }
    catch (error) {
        next(error);
    }
}));
exports.userController.delete('/:id', passport_1.default.authenticate('jwt', { session: false }), (0, validator_handler_1.validatorHandler)(user_dto_1.getUserDto, validator_handler_1.propertySchema.PARAMS), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield service.delete(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
}));
