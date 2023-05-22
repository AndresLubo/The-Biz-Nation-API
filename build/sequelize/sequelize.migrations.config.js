"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_env_1 = require("../config/config.env");
const { port, username, host, dbName, password } = config_env_1.configEnv.database;
const uri = `mysql://${username}:${password}@${host}:${port}/${dbName}`;
module.exports = {
    development: {
        url: uri,
        dialect: 'mysql',
    },
    production: {
        url: uri,
        dialect: 'mysql'
    }
};
