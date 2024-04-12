"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieById = exports.getAllMovies = void 0;
const MovieService_1 = require("../../../domain/services/MovieService");
const response_1 = require("../../../utils/response");
const movieService = new MovieService_1.MovieService();
/**
 * Récupère la liste de tous les films
 * @param req
 * @param res
 */
const getAllMovies = (req, res) => {
    const movies = movieService.getAllMovies();
    console.table(movies);
    (0, response_1.response)(res, {
        statusCode: 200,
        message: "OK",
        data: movies,
    });
};
exports.getAllMovies = getAllMovies;
/**
 * Récupère un film par son id
 * @param req
 * @param res
 */
const getMovieById = (req, res) => {
    const movieId = req.params.id;
    const movie = movieService.getMovieById(movieId);
    console.log(movie);
    if (!movie) {
        (0, response_1.response)(res, {
            statusCode: 404,
            message: "Movie not found",
        });
    }
    else {
        (0, response_1.response)(res, {
            statusCode: 200,
            message: "OK",
            data: movie,
        });
    }
};
exports.getMovieById = getMovieById;
