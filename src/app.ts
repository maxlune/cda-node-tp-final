import dotenv from "dotenv";
dotenv.config();
import express from "express";
import env from "./config/env";
import router from "./infrastrucutre/web/routes/movieRoutes";
import { requestLogger } from "./middlewares/logger";
import cookieParser from "cookie-parser";

/**
 * @type {Express}
 */
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * @type {number}
 */
const { PORT } = env;

app.use(requestLogger);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
