"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const env_1 = __importDefault(require("../../../config/env"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserRepository_1 = require("../../repositories/UserRepository");
const response_1 = require("../../../utils/response");
const AuthService_1 = require("../../../domain/services/AuthService");
const { NODE_ENV } = env_1.default;
const userRepo = new UserRepository_1.UserRepository();
const authService = new AuthService_1.AuthService();
/**
 * Connexion 'un utilisateur
 * @param req
 * @param res
 */
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = userRepo.getUserByUsername(username);
        if (!user)
            return (0, response_1.response)(res, {
                statusCode: 401,
                message: "Authentication failed",
            });
        const isValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isValid)
            return (0, response_1.response)(res, {
                statusCode: 401,
                message: "Authentication failed",
            });
        const accessToken = authService.issueAccessToken(user.id);
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: NODE_ENV === "production",
        });
        (0, response_1.response)(res, { statusCode: 200, message: "Authentication successful" });
    }
    catch (error) {
        console.error(error);
        (0, response_1.response)(res, { statusCode: 500, message: "Internal server error" });
    }
});
exports.login = login;
/**
 * Enregistre un nouvel utilisateur
 * @param req
 * @param res
 * @returns
 */
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!(username === null || username === void 0 ? void 0 : username.trim()) || !(password === null || password === void 0 ? void 0 : password.trim()))
            return (0, response_1.response)(res, {
                statusCode: 400,
                message: "Invalid username or password",
            });
        /**
         * Vérifie si l'username existe déjà
         */
        const existingUsername = userRepo.getUserByUsername(username);
        if (existingUsername)
            return (0, response_1.response)(res, {
                statusCode: 409,
                message: "Username already exists",
            });
        /**
         * Hashage du mot de passe
         */
        const hashedPassword = yield bcrypt_1.default.hash(password, 12);
        userRepo.createUser({ username, password: hashedPassword });
        (0, response_1.response)(res, { statusCode: 201, message: "User created successfully" });
    }
    catch (error) {
        console.error(error);
        (0, response_1.response)(res, { statusCode: 500, message: "Internal server error" });
    }
});
exports.register = register;
