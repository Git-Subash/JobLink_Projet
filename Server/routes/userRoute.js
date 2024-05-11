import express from "express";
import { getUser } from "../controllers/users-controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();
//User Routes
router.get("/api/users", verifyToken, getUser);
router.get("/api/Logout", verifyToken);
export default router;
