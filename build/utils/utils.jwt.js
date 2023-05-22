"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_env_1 = require("../config/config.env");
const { secret } = config_env_1.configEnv.jwt;
const signToken = (payload) => jsonwebtoken_1.default.sign(payload, secret);
exports.signToken = signToken;
const verifyToken = (token) => jsonwebtoken_1.default.verify(token, secret);
exports.verifyToken = verifyToken;
