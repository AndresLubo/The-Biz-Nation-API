import { createApp } from "./app";
import { configEnv } from "./config/config.env";

const { port } = configEnv;
const app = createApp();


app.listen(port, () => console.log('Application running on the port:', port));


