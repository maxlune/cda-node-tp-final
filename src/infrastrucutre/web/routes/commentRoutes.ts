import express from "express";
import { getCommentsByMovieId } from "../controllers/CommentsController";

const router = express.Router();

router.get("/:id", getCommentsByMovieId);

export default router;
