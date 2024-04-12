"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsByMovieId = void 0;
const CommentRepository_1 = require("../../repositories/CommentRepository");
const response_1 = require("../../../utils/response");
const commentRepository = new CommentRepository_1.CommentRepository();
/**
 * Afficher les commentaires d'un film filtré par son id
 * @param req
 * @param res
 */
const getCommentsByMovieId = (req, res) => {
    const { id } = req.params;
    const comments = commentRepository.getCommentsByMovieId(id);
    console.table(comments);
    (0, response_1.response)(res, {
        statusCode: 200,
        data: comments,
        message: "OK",
    });
};
exports.getCommentsByMovieId = getCommentsByMovieId;
