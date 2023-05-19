"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_env_1 = require("../config/config.env");
const sequelize_initialization_1 = require("./sequelize.initialization");
const { port, username, host, dbName, password } = config_env_1.configEnv.database;
const uri = `mysql://${username}:${password}@${host}:${port}/${dbName}`;
exports.sequelize = new sequelize_1.Sequelize(uri, {
    dialect: "mysql",
    logging: false,
});
(0, sequelize_initialization_1.setupModels)(exports.sequelize);
