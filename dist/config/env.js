"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = {
    PORT: parseInt(process.env.PORT || "3000"),
    NODE_ENV: process.env.NODE_ENV ||
        "development",
    JWT_SECRET: process.env.JWT_SECRET || "B1gJwT!$aùs",
};
exports.default = env;
