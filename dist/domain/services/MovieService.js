"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const MovieRepository_1 = require("../../infrastrucutre/repositories/MovieRepository");
class MovieService {
    constructor() {
        this.movieRepository = new MovieRepository_1.MovieRepository();
    }
    getAllMovies() {
        return this.movieRepository.getAllMovies();
    }
    getMovieById(id) {
        return this.movieRepository.getMovieById(id);
    }
}
exports.MovieService = MovieService;
