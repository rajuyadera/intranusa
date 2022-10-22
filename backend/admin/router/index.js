import express from "express";
import { getUsers, Register, Login, Logout, Delete, getUsersById, updateUsers } from "../controller/Users.js";

import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

// router users
router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.get("/users/:id", getUsersById);
router.patch("/users/:id", updateUsers);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.delete("/delete/users/:id", Delete )

export default router;
