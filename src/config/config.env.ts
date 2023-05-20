import dotenv from 'dotenv';
dotenv.config()

export const configEnv = {
  port: process.env.PORT ?? 3000,
  database: {
    port: process.env.MYSQL_DB_PORT,
    host: process.env.MYSQL_DB_HOST,
    username: process.env.MYSQL_DB_USERNAME,
    dbName: process.env.MYSQL_DB_NAME,
    password: process.env.MYSQL_DB_PASSWORD
  },
  jwt: {
    secret: process.env.SECRET ?? "secrect"
  }
};
