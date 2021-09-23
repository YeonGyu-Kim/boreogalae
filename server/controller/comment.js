import * as commentRepository from "../data/comment.js";
import * as userRepository from "../data/auth.js";
import { currentId } from "./auth.js";
import { getSocketIO } from "../connection/socket.js";

export const getComments = async (req, res, next) => {
  const nickname = req.query.nickname;
  const data = await (nickname
    ? commentRepository.getAllByNickname(nickname)
    : commentRepository.getAll());
  res.status(201).json(data);
};

export const getComment = async (req, res, next) => {};

export const createComment = async (req, res, next) => {
  const { text } = req.body;
  const { contentsId } = req.body;
  const comment = await commentRepository.create(
    JSON.parse(text),
    currentId,
    contentsId
  );
  res.status(201).json(comment);
  getSocketIO().emit("create", comment);
};

export const updateComment = async (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const comment = await commentRepository.update(id, JSON.parse(text));
  res.status(201).json(comment);
};

export const deleteComment = async (req, res, next) => {
  const id = req.params.id;
  const comment = await commentRepository.getAllById(id);
  if (!comment) {
    return res.sendStatus(404);
  }
  if (comment.userId !== currentId) {
    return res.sendStatus(403);
  }
  await commentRepository.remove(id);
  res.sendStatus(204);
  getSocketIO().emit("delete", comment);
};
