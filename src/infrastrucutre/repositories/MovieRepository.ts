import path from "path";
import fs from "fs";
import { Movie } from "../../domain/entities/Movie";
import { CommentRepository } from "./CommentRepository";

export class MovieRepository {
  private movies: Movie[];
  private commentRepository = new CommentRepository();
  private filePath = path.join(__dirname, "..", "data", "movies.json");

  constructor() {
    this.movies = this.getAllMovies();
  }

  /**
   * Récupère la liste de tous les films du fichier movies.json
   * @returns {Movie[]} - Un tableau de tous les films
   */
  public getAllMovies(): Movie[] {
    const data = fs.readFileSync(this.filePath, "utf-8");
    const movies = JSON.parse(data);

    return movies.map((movie: Movie) => {
      if (!movie.id) return movie;
      const comments = this.commentRepository.getCommentsByMovieId(movie.id);
      return { ...movie, comments };
    });
  }

  /**
   * Récupère un film par son id
   * @param id - L'identifiant du film à récupèrer
   * @returns {Movie} - Le film correspondant à l'identifiant fourni
   * @throws {Error} - Erreur si aucun film avec l'identifiant fourni n'est trouvé
   */
  public getMovieById(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new Error(`Movie not found`);
    }
    return movie;
  }
}
