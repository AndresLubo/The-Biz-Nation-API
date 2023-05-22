"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_env_1 = require("./config/config.env");
const { port } = config_env_1.configEnv;
const app = (0, app_1.createApp)();
app.listen(port, () => console.log('Application running on the port:', port));
