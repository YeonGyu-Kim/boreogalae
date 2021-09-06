import express from "express";
import "express-async-errors";
import passport from "passport";
import * as authController from "../controller/auth.js";

const router = express.Router();

router.post("/user", authController.login);

export default router;
