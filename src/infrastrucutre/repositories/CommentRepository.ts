import { Comment } from "../../domain/entities/Comment";
import fs from "fs";
import path from "path";

export class CommentRepository {
  private filePath = path.join(__dirname, "..", "data", "comments.json");

  /**
   * Récupère la list des commentaires du fichier comments.json
   * @returns {Comment[]}
   */
  getAllComments(): Comment[] {
    const data = fs.readFileSync(this.filePath, "utf-8");
    return JSON.parse(data);
  }

  /**
   * Récupère un commentaire par son id
   * @param {string} movieId
   * @returns {Comment[]}
   */
  getCommentsByMovieId(movieId: string): Comment[] {
    const comments = this.getAllComments();
    return comments.filter((comment) => comment.movieId === movieId);
  }
}
