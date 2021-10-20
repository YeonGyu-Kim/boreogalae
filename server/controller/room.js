import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import * as roomRepository from "../data/room.js";
import { currentId, currentUser, imageUrl } from "./auth.js";
import { getSocketIO } from "../connection/socket.js";

export const getRoom = async (req, res, next) => {
  const result = req.body;
  const data = await roomRepository.getAll();
  res.status(201).json(data);
};

export const createRoom = async (req, res, next) => {
  const data = req.body;
  const room = await roomRepository.createChatRoom(
    JSON.parse(data.title),
    currentId,
    JSON.parse(data.nickname),
    JSON.parse(data.url)
  );
  res.status(201).json(room);
  getSocketIO().emit("create-room", room);
};
