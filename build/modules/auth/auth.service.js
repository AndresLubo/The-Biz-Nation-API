"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const user_service_1 = require("../user/user.service");
const utils_bcrypt_1 = require("../../utils/utils.bcrypt");
const utils_jwt_1 = require("../../utils/utils.jwt");
const service = user_service_1.UserService.create();
class AuthService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static create() {
        if (AuthService.instance === null)
            AuthService.instance = new AuthService();
        return AuthService.instance;
    }
    async getUser(email, userPassword) {
        const user = await service.getByEmail(email);
        const isMatch = await (0, utils_bcrypt_1.verifyPassword)(userPassword, user.dataValues.password);
        if (!isMatch)
            throw boom_1.default.unauthorized();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...newUser } = user.dataValues;
        return newUser;
    }
    signToken(user) {
        const payload = {
            sub: user.id,
            nickname: user.nickname,
        };
        const token = (0, utils_jwt_1.signToken)(payload);
        return {
            user,
            token,
        };
    }
}
AuthService.instance = null;
exports.AuthService = AuthService;
