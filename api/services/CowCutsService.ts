import db from "../models";
import { v4 as uuidv4 } from "uuid";
import CutsAtributtes from "../interfaces/cuts";

export async function getCowCuts(): Promise<CutsAtributtes[]> {
  let cows = await db.CowCuts.findAll();
  return cows;
}

export const createCowCut = async (cutData: any): Promise<CutsAtributtes> => {
  let result = await db.CowCuts.create({
    id: uuidv4(),
    name: cutData.name,
    photo: cutData.photo,
    weight: cutData.weight,
    fat: cutData.fat,
    bone: cutData.bone,
  });
  return result;
};
