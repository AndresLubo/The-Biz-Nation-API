import { Sequelize } from "sequelize";
import { configEnv } from "../config/config.env";
import { setupModels } from "./sequelize.initialization";

const { port, username, host, dbName, password } = configEnv.database;
const uri = `mysql://${username}:${password}@${host}:${port}/${dbName}`;

export const sequelize = new Sequelize(uri, {
  dialect: "mysql",
  logging: false,
});

setupModels(sequelize);
