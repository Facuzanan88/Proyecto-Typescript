import express from "express";
import { getPigCuts, postPigCut } from "../controllers/PigCutsController";

const router = express.Router();

router.get("/pig", getPigCuts);
router.post("/pig", postPigCut);

export default router;
