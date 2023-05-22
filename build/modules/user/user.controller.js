"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const express_1 = require("express");
const user_service_1 = require("./user.service");
const validator_handler_1 = require("../../middlewares/validator.handler");
const user_dto_1 = require("./user.dto");
const service = user_service_1.UserService.create();
exports.userController = (0, express_1.Router)();
exports.userController.get('/', async (req, res, next) => {
    try {
        const users = await service.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.userController.get('/:id', (0, validator_handler_1.validatorHandler)(user_dto_1.getUserDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await service.findOne(parseInt(id));
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
});
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
exports.userController.put('/:id', (0, validator_handler_1.validatorHandler)(user_dto_1.getUserDto, validator_handler_1.propertySchema.PARAMS), (0, validator_handler_1.validatorHandler)(user_dto_1.updateUserDto, validator_handler_1.propertySchema.BODY), async (req, res, next) => {
    try {
        const { id } = req.params;
        const changes = req.body;
        const rta = await service.update(parseInt(id), changes);
        res.status(200).json(rta);
    }
    catch (error) {
        next(error);
    }
});
exports.userController.delete('/:id', (0, validator_handler_1.validatorHandler)(user_dto_1.getUserDto, validator_handler_1.propertySchema.PARAMS), async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.delete(parseInt(id));
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
});
