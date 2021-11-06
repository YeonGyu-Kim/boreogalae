import express from "express";
import "express-async-errors";
import * as commentController from "../controller/notice.js";

const router = express.Router();

// GET /comments
// GET /comments?username=:username
router.get("/", commentController.getNotice);

// POST /comments
router.post("/", commentController.createNotice);

export default router;
