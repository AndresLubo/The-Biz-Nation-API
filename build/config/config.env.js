"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.configEnv = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.configEnv = {
    port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000,
    database: {
        port: process.env.MYSQL_DB_PORT,
        host: process.env.MYSQL_DB_HOST,
        username: process.env.MYSQL_DB_USERNAME,
        dbName: process.env.MYSQL_DB_NAME,
        password: process.env.MYSQL_DB_PASSWORD
    },
    jwt: {
        secret: (_b = process.env.SECRET) !== null && _b !== void 0 ? _b : "secrect"
    }
};
