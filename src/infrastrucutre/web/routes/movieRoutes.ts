import express from "express";
import { getAllMovies, getMovieById } from "../controllers/MovieController";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovieById);

export default router;
