"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = {
    PORT: parseInt(process.env.PORT || "3000"),
    NODE_ENV: process.env.NODE_ENV ||
        "development",
};
exports.default = env;
