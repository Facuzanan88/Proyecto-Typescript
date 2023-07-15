import express from "express";
import { getCuts, putCut } from "../controllers/cutsController";

const router = express.Router();

router.get("/cuts", getCuts);
//router.get("/users/:id", getUsers);
router.post("/cuts", putCut);

export default router;
