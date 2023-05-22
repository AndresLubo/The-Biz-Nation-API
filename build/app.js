"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./router/router");
const error_handler_1 = require("./middlewares/error.handler");
require("./utils/passport/passport.index");
const createApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    (0, router_1.RouterApi)(app);
    app.use(error_handler_1.ormErrorHandler);
    app.use(error_handler_1.boomErrorHandler);
    app.use(error_handler_1.errorHandler);
    return app;
};
exports.createApp = createApp;
