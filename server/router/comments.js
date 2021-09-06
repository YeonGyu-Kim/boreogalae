import express from "express";
import "express-async-errors";
import * as commentController from "../controller/comment.js";

const router = express.Router();

// GET /comments
// GET /comments?username=:username
router.get("/", commentController.getComments);

// GET /comments/:id
router.get("/:id", commentController.getComment);

// POST /comments
router.post("/", commentController.createComment);
// PUT /comments/:id
router.put("/:id", commentController.updateComment);
// DELETE /comments/:id
router.delete("/:id", commentController.deleteComment);

export default router;
