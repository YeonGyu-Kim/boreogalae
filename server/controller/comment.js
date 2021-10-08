import * as commentRepository from "../data/comment.js";
import { currentId } from "./auth.js";
import { getSocketIO } from "../connection/socket.js";

export const getComments = async (req, res, next) => {
  const nickname = req.query.nickname;
  const data = await (nickname
    ? commentRepository.getAllByNickname(nickname)
    : commentRepository.getAll());
  res.status(201).json(data);
};

export const createComment = async (req, res, next) => {
  const { text } = req.body;
  const { contentsId } = req.body;
  const comment = await commentRepository.create(
    JSON.parse(text),
    currentId,
    contentsId
  );
  res.status(201).json(comment);
  getSocketIO().emit("create-comment", comment);
};

export const createReply = async (req, res, next) => {
  const { text } = req.body;
  const { contentsId } = req.body;
  const { parentId } = req.body;
  const comment = await commentRepository.reply(
    JSON.parse(text),
    currentId,
    contentsId,
    parentId
  );
  res.status(201).json(comment);
  getSocketIO().emit("create-reply", comment);
};

export const updateComment = async (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const comment = await commentRepository.update(id, JSON.parse(text));
  res.status(201).json(comment);
  getSocketIO().emit("update", comment);
};

export const countVote = async (req, res, next) => {
  const { id } = req.params;
  const { voteCount } = req.body;
  const count = await commentRepository.count(id, voteCount);
  res.status(201).json(count);
  getSocketIO().emit("update", count);
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
