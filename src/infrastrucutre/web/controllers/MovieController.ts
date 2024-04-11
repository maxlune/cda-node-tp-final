import { Request, Response } from "express";
import { MovieService } from "../../../domain/services/MovieService";
import { response } from "../../../utils/response";

const movieService = new MovieService();

export const getAllMovies = (req: Request, res: Response) => {
  const movies = movieService.getAllMovies();
  console.table(movies);
  response(res, {
    statusCode: 200,
    message: "OK",
    data: movies,
  });
};

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
