import express from "express";
import { getUsers, postUser } from "../controllers/userController";
import { getCuts, putCut } from "../controllers/cutsController";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsers);
router.post("/users", postUser);

export default router;
