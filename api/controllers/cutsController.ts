import { Request, Response } from "express";
import * as cutsService from "../services/cutsService";

export async function getCuts(req: Request, res: Response): Promise<void> {
  let result = await cutsService.getCuts();
  try {
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

export async function putCut(req: Request, res: Response): Promise<void> {
  const cut = req.body;

  try {
    let result = await cutsService.createCut(cut);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
