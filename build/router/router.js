"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterApi = void 0;
const express_1 = require("express");
const user_controller_1 = require("../modules/user/user.controller");
const auth_controller_1 = require("../modules/auth/auth.controller");
const character_controller_1 = require("../modules/character/character.controller");
const audiovisualContent_controller_1 = require("../modules/audiovisual_content/audiovisualContent.controller");
const genre_controller_1 = require("../modules/genre/genre.controller");
const RouterApi = (app) => {
    const router = (0, express_1.Router)();
    router.use('/users', user_controller_1.userController);
    router.use('/auth', auth_controller_1.authController);
    router.use('/characters', character_controller_1.characterController);
    router.use('/movies', audiovisualContent_controller_1.AudiovisualContentRouter);
    router.use('/genres', genre_controller_1.genreController);
    app.use("/api/disney-demo/v1", router);
};
exports.RouterApi = RouterApi;
