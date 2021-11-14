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
import noticeRouter from "./router/notice.js";
import axios from "axios";
import { Server } from "socket.io";
import { initSocket } from "./connection/socket.js";
import multer from "multer";
import { config } from "./config.js";

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/images/");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".");
    ext = ext[ext.length - 1];
    cb(null, `${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: storage });

const app = express();

const corsOption = {
  origin: config.cors.allowedOrigin,
  optionsSuccessStatus: 200,
};

app.use([
  express.static("public"),
  express.json(),
  cors(corsOption),
  upload.array("files"),
  helmet(),
]);

app.use("/auth", authRotuer);
app.use("/comments", commenstRouter);

app.use("/chat", chatRouter);
app.use("/room", roomRouter);
app.use("/notice", noticeRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

sequelize.sync().then(() => {
  console.log(`Server is started... ${new Date()}`);
});

const server = app.listen(config.port);
initSocket(server);
