"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../../config/env"));
const { JWT_SECRET } = env_1.default;
class AuthService {
    /**
     * Génère un JWT
     * @param id
     */
    issueAccessToken(id) {
        return jsonwebtoken_1.default.sign({ userId: id }, JWT_SECRET, { expiresIn: "15m" });
    }
}
exports.AuthService = AuthService;
