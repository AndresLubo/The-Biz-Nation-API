"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const config_env_1 = require("../../../config/config.env");
const { secret } = config_env_1.configEnv.jwt;
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};
exports.JwtStrategy = new passport_jwt_1.Strategy(options, (payload, done) => done(null, payload));
