"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormErrorHandler = exports.boomErrorHandler = exports.errorHandler = void 0;
const boom_1 = require("@hapi/boom");
const sequelize_1 = require("sequelize");
const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
};
exports.errorHandler = errorHandler;
const boomErrorHandler = (err, req, res, next) => {
    if (err instanceof boom_1.Boom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    else {
        next(err);
    }
};
exports.boomErrorHandler = boomErrorHandler;
const ormErrorHandler = (err, req, res, next) => {
    if (err instanceof sequelize_1.ValidationError) {
        res.status(409).json({
            statusCode: 409,
            message: `${err.errors[0].value} you already exist`,
        });
    }
    else {
        next(err);
    }
};
exports.ormErrorHandler = ormErrorHandler;
