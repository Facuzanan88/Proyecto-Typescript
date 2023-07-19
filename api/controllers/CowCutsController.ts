import { Request, Response } from "express";
import * as CowcutsService from "../services/CowCutsService";

export async function getCowCuts(req: Request, res: Response): Promise<void> {
  let result = await CowcutsService.getCowCuts();
  try {
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

export async function postCowCut(req: Request, res: Response): Promise<void> {
  const cow = req.body;

  try {
    let result = await CowcutsService.createCowCut(cow);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
