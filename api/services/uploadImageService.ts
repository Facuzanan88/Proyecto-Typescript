import { v2 as cloudinary } from "cloudinary";

import multer from "multer";
import { Request, Response } from "express";

const upload = multer({ dest: "uploads/" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = upload.single("file");

export const handleImageUpload = (req: Request, res: Response): void => {
  if (!req.file) {
    res.status(400).json({ error: "No se ha subido ningún archivo" });
    return;
  }
  cloudinary.uploader
    .upload(req.file.path)
    .then((result) => {
      res.json({ url: result.secure_url });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Error al subir la imagen a Cloudinary" });
    });
};
