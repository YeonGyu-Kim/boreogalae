import express from "express";
import "express-async-errors";
import * as chatController from "../controller/chat.js";

const router = express.Router();

//GET Chat
router.get("/room/:roomId", chatController.getChat);

//POST Chat
router.post("/room/user/:userId", chatController.createChat);

export default router;
