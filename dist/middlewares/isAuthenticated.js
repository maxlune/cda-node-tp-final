"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const response_1 = require("../utils/response");
const env_1 = __importDefault(require("../config/env"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { JWT_SECRET } = env_1.default;
const isAuthenticated = (req, res, next) => {
    const { accessToken } = req.cookies;
    if (!accessToken)
        return (0, response_1.response)(res, { statusCode: 403, message: "Token missing" });
    try {
        const decoded = jsonwebtoken_1.default.verify(accessToken, JWT_SECRET);
        const { id, name } = decoded;
        req.user = { id, name };
        next();
    }
    catch (err) {
        return (0, response_1.response)(res, { statusCode: 401, message: "Unauthorized" });
    }
};
exports.isAuthenticated = isAuthenticated;
