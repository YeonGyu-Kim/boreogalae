import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import * as chatRepository from "../data/chat.js";
import * as roomRepository from "../data/room.js";
import { currentId, currentUser } from "./auth.js";
import { getSocketIO } from "../connection/socket.js";

export const getChat = async (req, res, next) => {
  const result = req.body;
  const data = await chatRepository.getAll();
  res.status(201).json(data);
};

export const createChat = async (req, res, next) => {
  const result = req.body;
  const chat = await chatRepository.createChat(
    JSON.parse(result.text),
    JSON.parse(result.nickname),
    JSON.parse(result.url),
    result.roomId,
    result.currentId
  );
  res.status(201).json(chat);
  getSocketIO().emit("create-chat", chat);
};
