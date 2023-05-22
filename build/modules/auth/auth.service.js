"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    getUser(email, userPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield service.getByEmail(email);
            const isMatch = yield (0, utils_bcrypt_1.verifyPassword)(userPassword, user.dataValues.password);
            if (!isMatch)
                throw boom_1.default.unauthorized();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = user.dataValues, { password } = _a, newUser = __rest(_a, ["password"]);
            return newUser;
        });
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
