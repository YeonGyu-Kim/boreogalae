import * as noticeRepository from "../data/notice.js";
import { currentId } from "./auth.js";
import { getSocketIO } from "../connection/socket.js";

let uploadImg;
export const getNotice = async (req, res, next) => {
  const nickname = req.query.nickname;
  const data = await (nickname
    ? noticeRepository.getAllByNickname(nickname)
    : noticeRepository.getAll());
  res.status(201).json(data);
};

export const createNotice = async (req, res, next) => {
  const { content } = req.body;
  const { title } = req.body;
  const comment = await noticeRepository.create(
    JSON.parse(content),
    currentId,
    JSON.parse(title),
    uploadImg
  );
  res.status(201).json(comment);
  getSocketIO().emit("create-notice", comment);
};

export const uploadImage = async (req, res, next) => {
  const img = req.files[0].path;
  uploadImg = img;
  console.log(img);
};
