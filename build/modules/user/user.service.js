"use strict";
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
    async findAll() {
        const users = await models.User.findAll({
            attributes: {
                exclude: ['password'],
            },
        });
        return users;
    }
    async findOne(id) {
        const user = await models.User.findByPk(id, {
            attributes: {
                exclude: ['password'],
            },
        });
        if (!user)
            throw boom_1.default.notFound(`The user with id ${id} does not exist.`);
        return user;
    }
    async getByEmail(email) {
        const user = await models.User.findOne({ where: { email } });
        if (!user)
            throw boom_1.default.notFound(`The user with email ${email} does not exist.`);
        return user;
    }
    async create(data) {
        const hash = await (0, utils_bcrypt_1.hashPassword)(data.password);
        const newUser = await models.User.create({
            ...data,
            password: hash,
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...user } = newUser.dataValues;
        return user;
    }
    async update(id, changes) {
        const user = await this.findOne(id);
        const response = await user.update(changes);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...userUpdate } = response.dataValues;
        return userUpdate;
    }
    async delete(id) {
        const user = await this.findOne(id);
        await user.destroy();
        return { message: `${id} user removed.` };
    }
}
UserService.instance = null;
exports.UserService = UserService;
