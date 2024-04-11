"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MovieController_1 = require("../controllers/MovieController");
const router = express_1.default.Router();
router.get("/", MovieController_1.getAllMovies);
// router.get("/movies", getAllMovies);
router.get("/:id", MovieController_1.getMovieById);
exports.default = router;
