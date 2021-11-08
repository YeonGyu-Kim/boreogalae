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

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image/");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".");
    ext = ext[ext.length - 1];
    cb(null, `${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: storage });

/*
let corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
*/

const app = express();

app.use([
  express.static("public"),
  express.json(),
  cors(),
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

sequelize.sync().then((client) => {
  console.log(client);
});

const server = app.listen(8080);
initSocket(server);
