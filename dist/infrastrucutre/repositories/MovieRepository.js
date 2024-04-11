"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepository = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const CommentRepository_1 = require("./CommentRepository");
class MovieRepository {
    constructor() {
        this.commentRepository = new CommentRepository_1.CommentRepository();
        this.filePath = path_1.default.join(__dirname, "..", "data", "movies.json");
        this.movies = this.getAllMovies();
    }
    /**
     * Récupère la liste de tous les films du fichier movies.json
     * @returns {Movie[]}
     */
    getAllMovies() {
        const data = fs_1.default.readFileSync(this.filePath, "utf-8");
        const movies = JSON.parse(data);
        return movies.map((movie) => {
            if (!movie.id)
                return movie;
            const comments = this.commentRepository.getCommentsByMovieId(movie.id);
            return Object.assign(Object.assign({}, movie), { comments });
        });
    }
    /**
     * Récupère un film par son id
     * @param id
     * @returns {Movie}
     */
    getMovieById(id) {
        const movie = this.movies.find((movie) => movie.id === id);
        if (!movie) {
            throw new Error(`Movie not found`);
        }
        return movie;
    }
}
exports.MovieRepository = MovieRepository;
