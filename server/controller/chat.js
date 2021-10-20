import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import * as chatRepository from "../data/chat.js";
import { currentId, currentUser } from "./auth.js";

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
};

export async function deleteChatRoom() {
  const data = req.body;
  //console.log(data);
  //const room = await chatRepository.getAllById(data.roomId);
  await chatRepository.remove(data.roomId);
  res.sendStatus(204);
}
