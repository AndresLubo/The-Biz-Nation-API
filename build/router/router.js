"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterApi = void 0;
const express_1 = require("express");
const RouterApi = (app) => {
    const router = (0, express_1.Router)();
    app.use("/api/disney-demo/v1", router);
};
exports.RouterApi = RouterApi;
