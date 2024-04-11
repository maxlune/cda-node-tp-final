import { EnvConfig } from "../types/env";

const env: EnvConfig = {
  PORT: parseInt(process.env.PORT || "3000"),
  NODE_ENV:
    (process.env.NODE_ENV as "development" | "production" | "test") ||
    "development",
  JWT_SECRET: process.env.JWT_SECRET || "B1gJwT!$aùs",
};

export default env;
