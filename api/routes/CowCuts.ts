import express from "express";
import {
  getCowCuts,
  postCowCut,
  cowById,
} from "../controllers/CowCutsController";

const router = express.Router();

router.get("/cow", getCowCuts);
router.get("/cow/:id", cowById);
router.post("/cow", postCowCut);

export default router;
