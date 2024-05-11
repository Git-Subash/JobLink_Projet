import express from "express";
import { Register } from "../controllers/auth-controller.js";
import upload from "../middleware/multer.js";
import { Login } from "../controllers/auth-controller.js";

const router = express.Router();
//route for Registers
router.post("/api/Register", upload.single("profileImage"), Register);
//Route for Login
router.post("/api/Login", Login);

export default router;
