"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
class UserRepository {
    constructor() {
        this.filePath = path_1.default.join(__dirname, "..", "data", "users.json");
    }
    /**
     * Récupère tous les utilisateurs
     */
    getAllUsers() {
        const data = fs_1.default.readFileSync(this.filePath, "utf-8");
        return JSON.parse(data);
    }
    /**
     * Récupère un utilisateur en fonction de son username
     * @param username
     */
    getUserByUsername(username) {
        const users = this.getAllUsers();
        return users.find((user) => user.username === username);
    }
    /**
     * Création d'un nouvel utilisateur
     * @param user
     */
    createUser(user) {
        const users = this.getAllUsers();
        users.push(Object.assign(Object.assign({}, user), { id: crypto_1.default.randomUUID() }));
        fs_1.default.writeFileSync(this.filePath, JSON.stringify(users, null, 2));
    }
}
exports.UserRepository = UserRepository;
