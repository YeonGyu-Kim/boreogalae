import SQ from "sequelize";
import { sequelize } from "../db/database.js";
import * as roomRepository from "../data/room.js";
import { currentId, currentUser } from "./auth.js";

export const getRoom = async (req, res, next) => {
  const result = req.body;
  const data = await roomRepository.getAll();
  res.status(201).json(data);
};

export const createRoom = async (req, res, next) => {
  const data = req.body;
  const room = await roomRepository.createChatRoom(
    currentUser,
    data.title,
    data.max,
    currentId
  );
  res.status(201).json(room);
};
