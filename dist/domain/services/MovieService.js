"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const MovieRepository_1 = require("../../infrastrucutre/repositories/MovieRepository");
class MovieService {
    constructor() {
        this.movieRepository = new MovieRepository_1.MovieRepository();
    }
    /**
     * Récupère la liste de tous les films
     * @returns {Movie[]} - Liste de tous les films
     */
    getAllMovies() {
        return this.movieRepository.getAllMovies();
    }
    /**
     * Récupère un film par son identifiant
     * @param id - l'id d'un film
     * @returns {Movie | undefined} - Le film correspondant à l'id fourni
     */
    getMovieById(id) {
        return this.movieRepository.getMovieById(id);
    }
}
exports.MovieService = MovieService;
