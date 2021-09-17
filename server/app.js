import express from "express";
import "express-async-errors";
import proxy from "express-http-proxy";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { db } from "./db/database.js";
import commenstRouter from "./router/comments.js";
import authRotuer from "./router/auth.js";
import axios from "axios";
import passport from "passport";
import passportKakao from "passport-kakao";
import { Server } from "socket.io";
import { initSocket } from "./connection/socket.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/comments", commenstRouter);
app.use("/auth", authRotuer);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

const server = app.listen(8080);
initSocket(server);
