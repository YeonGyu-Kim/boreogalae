import express from "express";
import "express-async-errors";
import * as roomController from "../controller/room.js";

const router = express.Router();

//GET Room
router.get("/", roomController.getRoom);

//POST Room
router.post("/:roomId", roomController.createRoom);

export default router;
