import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import * as chatRepository from "../data/chat.js";

export const getChat = async (req, res, next) => {
  const result = req.body;
  const data = await chatRepository.getAll();
  res.status(201).json(data);
};

export const createChat = async (req, res, next) => {
  const { userUserId } = req.body;
  const { contentsId } = req.body;
  const chat = await chatRepository.createChatRoom(
    JSON.parse(text),
    currentId,
    contentsId
  );
  res.status(201).json(chat);
};
