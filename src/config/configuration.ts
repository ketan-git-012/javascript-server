import * as dotenv from "dotenv";
import { IConfig } from './IConfig';
dotenv.config();

const config: IConfig = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
};

Object.freeze(config);

export default config;
