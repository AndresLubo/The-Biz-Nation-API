"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const passport_local_1 = require("passport-local");
const auth_service_1 = require("../../../modules/auth/auth.service");
const service = auth_service_1.AuthService.create();
exports.LocalStrategy = new passport_local_1.Strategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const user = await service.getUser(email, password);
        done(null, user);
    }
    catch (error) {
        done(error, false);
    }
});
