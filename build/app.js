"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const data = __importStar(require("./swaggerDocs.json"));
const router_1 = require("./router/router");
const error_handler_1 = require("./middlewares/error.handler");
require("./utils/passport/passport.index");
const createApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(data));
    (0, router_1.RouterApi)(app);
    app.use(error_handler_1.ormErrorHandler);
    app.use(error_handler_1.boomErrorHandler);
    app.use(error_handler_1.errorHandler);
    return app;
};
exports.createApp = createApp;
