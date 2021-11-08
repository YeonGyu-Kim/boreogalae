import express from "express";
import "express-async-errors";
import * as noticeController from "../controller/notice.js";

const router = express.Router();

// GET /comments
// GET /comments?username=:username
router.get("/", noticeController.getNotice);

// POST /comments
router.post("/", noticeController.createNotice);

router.post("/upload", noticeController.uploadImage);

export default router;
