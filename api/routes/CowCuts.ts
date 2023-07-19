import express from "express";
import { getCowCuts, postCowCut } from "../controllers/CowCutsController";

const router = express.Router();

router.get("/cow", getCowCuts);
//router.get("/users/:id", getUsers);
router.post("/cow", postCowCut);

export default router;
