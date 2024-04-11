"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./config/env"));
const movieRoutes_1 = __importDefault(require("./infrastrucutre/web/routes/movieRoutes"));
const logger_1 = require("./middlewares/logger");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
/**
 * @type {Express}
 */
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/**
 * @type {number}
 */
const { PORT } = env_1.default;
app.use(logger_1.requestLogger);
app.use(movieRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
