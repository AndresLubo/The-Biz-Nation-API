"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const express_1 = require("express");
exports.usersController = (0, express_1.Router)();
exports.usersController.get('/', (req, res) => {
    res.json({
        message: 'Hola Mundo'
    });
});
