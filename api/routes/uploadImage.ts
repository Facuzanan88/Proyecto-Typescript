import { uploadImage, handleImageUpload } from "../services/uploadImageService";
import express from "express";

const router = express.Router();

router.post("/upload", uploadImage, handleImageUpload);

export default router;
