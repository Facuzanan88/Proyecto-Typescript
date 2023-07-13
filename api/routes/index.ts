import express from "express";
import { getUsers, postUser } from "../controllers/userController";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsers);
router.post("/users", postUser);

export default router;
