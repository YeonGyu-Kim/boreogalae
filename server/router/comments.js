import express from "express";
import "express-async-errors";
import * as commentController from "../controller/comment.js";

const router = express.Router();

// GET /comments
// GET /comments?username=:username
router.get("/", commentController.getComments);

// POST /comments
router.post("/", commentController.createComment);
// POST /comments/reply
router.post("/reply", commentController.createReply);
// PUT /comments/:id
router.put("/:id", commentController.updateComment);
// PUT /comments/:id/count
router.put("/:id/count", commentController.countVote);
// DELETE /comments/:id
router.delete("/:id", commentController.deleteComment);

export default router;
