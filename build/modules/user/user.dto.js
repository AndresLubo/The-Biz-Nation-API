"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDto = exports.createUserDto = exports.getUserDto = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.number().integer();
const email = joi_1.default.string().email().max(30);
const password = joi_1.default.string().min(8).max(30);
const nickname = joi_1.default.string().min(5).max(30);
exports.getUserDto = joi_1.default.object({
    id: id.required(),
});
exports.createUserDto = joi_1.default.object({
    email: email.required(),
    password: password.required(),
    nickname: nickname.required(),
});
exports.updateUserDto = joi_1.default.object({
    email: email,
    nickname: nickname,
});
