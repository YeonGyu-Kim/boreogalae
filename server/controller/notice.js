import * as commentRepository from "../data/notice.js";
import { currentId } from "./auth.js";
import { getSocketIO } from "../connection/socket.js";

export const getNotice = async (req, res, next) => {
  const nickname = req.query.nickname;
  const data = await (nickname
    ? commentRepository.getAllByNickname(nickname)
    : commentRepository.getAll());
  res.status(201).json(data);
};

export const createNotice = async (req, res, next) => {
  const { text } = req.body;
  const comment = await commentRepository.create(JSON.parse(text), currentId);
  res.status(201).json(comment);
  getSocketIO().emit("create-notice", comment);
};

export const uploadImage = async (req, res, next) => {
  console.log(req.files.upload);
};
