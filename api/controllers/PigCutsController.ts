import { Request, Response } from "express";
import * as PigcutsService from "../services/PigCutsService";

export async function getPigCuts(req: Request, res: Response): Promise<void> {
  let result = await PigcutsService.getPigCuts();
  try {
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

export async function postPigCut(req: Request, res: Response): Promise<void> {
  const cow = req.body;

  try {
    let result = await PigcutsService.createPigCut(cow);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
