import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import * as chatRepository from "../data/chat.js";

export const getChat = async (req, res, next) => {
  const result = req.body;
  const data = await chatRepository.getAll();
  res.status(201).json(data);
};

export const createChat = async (req, res, next) => {
  const result = req.body;
  const chat = await chatRepository.createChat(
    JSON.parse(result.text),
    result.roomId,
    result.userId,
    result.nickname
  );
  res.status(201).json(chat);
};
