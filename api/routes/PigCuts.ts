import express from "express";
import { getPigCuts, postPigCut } from "../controllers/PigCutsController";

const router = express.Router();

router.get("/cow", getPigCuts);
//router.get("/users/:id", getUsers);
router.post("/cow", postPigCut);

export default router;
