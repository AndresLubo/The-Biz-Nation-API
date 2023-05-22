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
exports.UserService = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const sequelize_index_1 = require("../../sequelize/sequelize.index");
const utils_bcrypt_1 = require("../../utils/utils.bcrypt");
const { models } = sequelize_index_1.sequelize;
class UserService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    static create() {
        if (UserService.instance === null)
            UserService.instance = new UserService();
        return UserService.instance;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield models.User.findAll({
                attributes: {
                    exclude: ['password'],
                },
            });
            return users;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield models.User.findByPk(id, {
                attributes: {
                    exclude: ['password'],
                },
            });
            if (!user)
                throw boom_1.default.notFound(`The user with id ${id} does not exist.`);
            return user;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield models.User.findOne({ where: { email } });
            if (!user)
                throw boom_1.default.notFound(`The user with email ${email} does not exist.`);
            return user;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = yield (0, utils_bcrypt_1.hashPassword)(data.password);
            const newUser = yield models.User.create(Object.assign(Object.assign({}, data), { password: hash }));
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = newUser.dataValues, { password } = _a, user = __rest(_a, ["password"]);
            return user;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOne(id);
            const response = yield user.update(changes);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _a = response.dataValues, { password } = _a, userUpdate = __rest(_a, ["password"]);
            return userUpdate;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOne(id);
            yield user.destroy();
            return { message: `${id} user removed.` };
        });
    }
}
UserService.instance = null;
exports.UserService = UserService;
