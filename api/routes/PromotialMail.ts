import express from "express";
import {
  getPromotialMail,
  postPromotialMail,
  PromotialMailByMail,
} from "../controllers/PromotialMailController";

const router = express.Router();

router.get("/promotialmail", getPromotialMail);
router.get("/promotialmail?email=", PromotialMailByMail);
router.post("/promotialmail", postPromotialMail);

export default router;
