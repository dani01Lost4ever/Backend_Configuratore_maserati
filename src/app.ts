import express from "express";
import * as http from "http";
import { Server } from 'socket.io';
import cors from "cors";
import morgan from "morgan";
import apiRouter from "./api/routes";
import bodyParser from "body-parser";
import { errorHandler } from "./errors";
import { notFoundHandler } from "./errors/not-found";
import { validationErrorHandler } from "./errors/validationError";
import "./cache";

const app = express();
export const server = http.createServer(app);
export const io = new Server(server);

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use("/api", apiRouter);
app.use(notFoundHandler);
app.use(validationErrorHandler);
app.use(errorHandler);

export default app;
