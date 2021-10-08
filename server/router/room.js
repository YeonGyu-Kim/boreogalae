import express from "express";
import "express-async-errors";
import * as roomController from "../controller/room.js";

const router = express.Router();

//GET Chat
router.get("/", roomController.getRoom);

//POST Chat
router.post("/", roomController.createRoom);

export default router;
