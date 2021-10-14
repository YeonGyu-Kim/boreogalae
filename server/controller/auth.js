import request from "request";
import express from "express";
import axios from "axios";
import * as userRepository from "../data/auth.js";
import { db } from "../db/database.js";

export let currentId;
export let currentUser;
export let imageUrl;
export const login = async (req, res, next) => {
  const { data } = req.body;
  const user = await userRepository.findByUserId(data.id);
  console.log(data);

  if (!user && data) {
    const addUserId = await userRepository.createUser({
      id: data.id,
      nickname: data.nickname,
      image: data.image,
    });
    res.status(201).json(addUserId);
    currentId = addUserId;
  } else {
    res.status(201).json(user);
    currentId = user.userId;
    currentUser = user.nickname;
    imageUrl = user.url;
  }
};

export async function me(req, res, next) {
  const user = await userRepository.findByUserId(currentId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
}
