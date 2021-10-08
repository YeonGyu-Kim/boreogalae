import express from "express";
import "express-async-errors";
import proxy from "express-http-proxy";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { db, sequelize } from "./db/database.js";
import commenstRouter from "./router/comments.js";
import authRotuer from "./router/auth.js";
import chatRouter from "./router/chat.js";
import roomRouter from "./router/room.js";
import axios from "axios";
import { Server } from "socket.io";
import { initSocket } from "./connection/socket.js";

/*
const cookieParser = require("cookie-parser");
const session = require("express-session");

*/
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/auth", authRotuer);
app.use("/comments", commenstRouter);

app.use("/chat", chatRouter);
app.use("/room", roomRouter);

/*
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
 */
app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

sequelize.sync().then((client) => {
  console.log(client);
});

const server = app.listen(8080);
initSocket(server);

/*
const sessionMiddleware = session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
});

webSocket(server, app, sessionMiddleware);
*/
