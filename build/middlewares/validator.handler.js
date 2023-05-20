"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorHandler = exports.propertySchema = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
var propertySchema;
(function (propertySchema) {
    propertySchema["PARAMS"] = "params";
    propertySchema["BODY"] = "body";
})(propertySchema = exports.propertySchema || (exports.propertySchema = {}));
const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next(boom_1.default.badRequest(error));
        }
        else {
            next();
        }
    };
};
exports.validatorHandler = validatorHandler;
