import express from "express";
import { getPigCuts, postPigCut } from "../controllers/PigCutsController";

const router = express.Router();

router.get("/cow", getPigCuts);
router.post("/cow", postPigCut);

export default router;
