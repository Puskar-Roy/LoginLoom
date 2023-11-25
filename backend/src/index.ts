import express, { Express, Request, Response, NextFunction } from "express";
require("dotenv").config();
import helmet from "helmet";
import morgan from "morgan";
import AppError from "./utils/appError";
import authRoutes from "./router/authRoutes";
import "./database/connectDb";

const app: Express = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json())

app.use(authRoutes);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.listen(process.env.PORT, () => {
  console.log(`Server Is Running on Port ${process.env.PORT}`);
});
