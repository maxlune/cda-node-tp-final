import express from "express";
import movieRoutes from "./movieRoutes";
import commentRoutes from "./commentRoutes";
import usersRoutes from "./userRoutes";

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/comments", commentRoutes);
router.use("/users", usersRoutes);

export default router;
