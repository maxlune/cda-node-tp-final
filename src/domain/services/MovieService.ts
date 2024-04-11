import { MovieRepository } from "../../infrastrucutre/repositories/MovieRepository";
import { Movie } from "../entities/Movie";

export class MovieService {
  private movieRepository: MovieRepository;

  constructor() {
    this.movieRepository = new MovieRepository();
  }

  /**
   * Récupère la liste de tous les films
   * @returns {Movie[]} - Liste de tous les films
   */
  public getAllMovies(): Movie[] {
    return this.movieRepository.getAllMovies();
  }

  /**
   * Récupère un film par son identifiant
   * @param id - l'id d'un film
   * @returns {Movie | undefined} - Le film correspondant à l'id fourni
   */
  public getMovieById(id: string): Movie | undefined {
    return this.movieRepository.getMovieById(id);
  }
}
