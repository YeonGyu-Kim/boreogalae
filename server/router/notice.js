import express from "express";
import "express-async-errors";
import * as noticeController from "../controller/notice.js";

const router = express.Router();

// GET /notice
router.get("/", noticeController.getNotice);

// POST /comments
router.post("/", noticeController.createNotice);

router.post("/upload", noticeController.uploadImage);

export default router;
