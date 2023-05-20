"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterApi = void 0;
const express_1 = require("express");
const user_controller_1 = require("../modules/user/user.controller");
const auth_controller_1 = require("../modules/auth/auth.controller");
const RouterApi = (app) => {
    const router = (0, express_1.Router)();
    router.use('/users', user_controller_1.userController);
    router.use('/auth', auth_controller_1.authController);
    app.use("/api/disney-demo/v1", router);
};
exports.RouterApi = RouterApi;
