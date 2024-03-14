import { Request, Response } from "express";
import * as PromotialMailService from "../services/PromotialMailService";

export async function getPromotialMail(
  req: Request,
  res: Response
): Promise<void> {
  let result = await PromotialMailService.getPromotialMail();
  try {
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

export async function PromotialMailByMail(
  req: Request,
  res: Response
): Promise<void> {
  const email = req.query.email;
  if (typeof email === "string") {
    try {
      let result = await PromotialMailService.getPromotialMailByMail(email);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(200).json();
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export async function postPromotialMail(
  req: Request,
  res: Response
): Promise<void> {
  const promotialMail = req.body;
  const email = req.body.email; // Obtener el correo electrónico del cuerpo de la solicitud

  try {
    // Verificar si el correo electrónico ya existe
    const existingMail = await PromotialMailService.getPromotialMailByMail(
      email
    );
    if (existingMail) {
      res.status(400).json({ error: "El correo electrónico ya existe" });
      return;
    }

    // Si no existe, crear un nuevo registro
    const newMail = await PromotialMailService.createPromotialMail(
      promotialMail
    );
    res
      .status(201)
      .json({ message: "Correo electrónico registrado exitosamente" });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ error: "Hubo un error al procesar la solicitud" });
  }
}
