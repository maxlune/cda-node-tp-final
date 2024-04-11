import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import env from "./config/env";
import router from "./infrastrucutre/web/routes/";
import { requestLogger } from "./middlewares/logger";
import cookieParser from "cookie-parser";
import helmet from "helmet";

/**
 * @type {Express}
 */
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

/**
 * @type {number}
 */
const { PORT } = env;

app.use(requestLogger);

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
