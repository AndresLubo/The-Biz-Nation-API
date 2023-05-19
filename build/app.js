"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./router/router");
const error_handler_1 = require("./middlewares/error.handler");
const createApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(error_handler_1.ormErrorHandler);
    app.use(error_handler_1.boomErrorHandler);
    app.use(error_handler_1.errorHandler);
    (0, router_1.RouterApi)(app);
    return app;
};
exports.createApp = createApp;
