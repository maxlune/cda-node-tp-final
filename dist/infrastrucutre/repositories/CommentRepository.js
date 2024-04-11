"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class CommentRepository {
    constructor() {
        this.filePath = path_1.default.join(__dirname, "..", "data", "comments.json");
    }
    /**
     * Récupère la list des commentaires du fichier comments.json
     * @returns {Comment[]}
     */
    getAllComments() {
        const data = fs_1.default.readFileSync(this.filePath, "utf-8");
        return JSON.parse(data);
    }
    /**
     * Récupère un commentaire par son id
     * @param {string} movieId
     * @returns {Comment[]}
     */
    getCommentsByMovieId(movieId) {
        const comments = this.getAllComments();
        return comments.filter((comment) => comment.movieId === movieId);
    }
}
exports.CommentRepository = CommentRepository;
