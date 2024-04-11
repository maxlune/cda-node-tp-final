"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieRoutes_1 = __importDefault(require("./movieRoutes"));
const commentRoutes_1 = __importDefault(require("./commentRoutes"));
const router = express_1.default.Router();
router.use("/movies", movieRoutes_1.default);
router.use("/comments", commentRoutes_1.default);
exports.default = router;
