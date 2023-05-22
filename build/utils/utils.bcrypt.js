"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = async (password) => await bcrypt_1.default.hash(password, 10);
exports.hashPassword = hashPassword;
const verifyPassword = async (password, hash) => await bcrypt_1.default.compare(password, hash);
exports.verifyPassword = verifyPassword;
