import { Request, Response } from "express";
import { MovieService } from "../../../domain/services/MovieService";
import { response } from "../../../utils/response";

const movieService = new MovieService();

/**
 * Récupère la liste de tous les films
 * @param req
 * @param res
 */
export const getAllMovies = (req: Request, res: Response) => {
  const movies = movieService.getAllMovies();
  console.table(movies);
  response(res, {
    statusCode: 200,
    message: "OK",
    data: movies,
  });
};

/**
 * Récupère un film par son id
 * @param req
 * @param res
 */
export const getMovieById = (req: Request, res: Response) => {
  const movieId = req.params.id;
  const movie = movieService.getMovieById(movieId);
  console.log(movie);
  if (!movie) {
    response(res, {
      statusCode: 404,
      message: "Movie not found",
    });
  } else {
    response(res, {
      statusCode: 200,
      message: "OK",
      data: movie,
    });
  }
};
