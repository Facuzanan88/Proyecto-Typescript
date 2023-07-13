import express from "express";
import { getAllUsers, getUser, postUser } from "../controllers/userController";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.post("/users", postUser);

export default router;
