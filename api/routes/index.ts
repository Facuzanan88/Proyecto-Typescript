import express from "express";
import { getAllUsers, postUser } from "../controllers/userController";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/createuser", postUser);

export default router;
