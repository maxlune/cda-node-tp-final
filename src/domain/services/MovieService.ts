import { MovieRepository } from "../../infrastrucutre/repositories/MovieRepository";
import { Movie } from "../entities/Movie";

export class MovieService {
  private movieRepository: MovieRepository;

  constructor() {
    this.movieRepository = new MovieRepository();
  }

  public getAllMovies(): Movie[] {
    return this.movieRepository.getAllMovies();
  }

  public getMovieById(id: string): Movie | undefined {
    return this.movieRepository.getMovieById(id);
  }
}
