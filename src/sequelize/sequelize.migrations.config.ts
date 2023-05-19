import { configEnv } from "../config/config.env";

const { port, username, host, dbName, password } = configEnv.database;
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
}
