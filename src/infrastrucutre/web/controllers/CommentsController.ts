import { Request, Response } from "express";
import { CommentRepository } from "../../repositories/CommentRepository";
import { response } from "../../../utils/response";

const commentRepository = new CommentRepository();

/**
 * afficher les commentaires d'un film filtré par son id
 * @param req
 * @param res
 */
export const getCommentsByMovieId = (req: Request, res: Response) => {
  const { id } = req.params;
  const comments = commentRepository.getCommentsByMovieId(id);
  console.table(comments);
  response(res, {
    statusCode: 200,
    data: comments,
    message: "OK",
  });
};
