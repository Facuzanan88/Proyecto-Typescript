import db from "../models";
import { v4 as uuidv4 } from "uuid";
import CutsAtributtes from "../interfaces/cuts";

export async function getPigCuts(): Promise<CutsAtributtes[]> {
  let cows = await db.PigCuts.findAll();
  return cows;
}

export const createPigCut = async (cutData: any): Promise<CutsAtributtes> => {
  let result = await db.PigCuts.create({
    id: uuidv4(),
    name: cutData.name,
    photo: cutData.photo,
    weight: cutData.weight,
    fat: cutData.fat,
    bone: cutData.bone,
  });
  return result;
};
