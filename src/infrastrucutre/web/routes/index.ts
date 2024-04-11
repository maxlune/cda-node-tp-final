import express from "express";
import movieRoutes from "./movieRoutes";
import commentRoutes from "./commentRoutes";

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/comments", commentRoutes);

export default router;
