import * as commentRepository from "../data/comment.js";
import * as userRepository from "../data/auth.js";
import { currentId } from "./auth.js";

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
  const comment = await commentRepository.create(JSON.parse(text), currentId);
  res.status(201).json(comment);
};

export const updateComment = async (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const comment = await commentRepository.update(id, JSON.parse(text));
  res.status(201).json(comment);
};

export const deleteComment = async (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const comment = await commentRepository.getById(id);
  if (!comment) {
    return res.sendStatus(404);
  }
  if (comment.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await commentRepository.update(id, text);
  res.status(200).json(updated);
};
