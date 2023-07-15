import db from "../models";
import { v4 as uuidv4 } from "uuid";
import CutsAtributtes from "../interfaces/cuts";

export async function getCuts(): Promise<CutsAtributtes[]> {
  let cuts = await db.Cuts.findAll();
  return cuts;
}

export const createCut = async (cutData: any): Promise<CutsAtributtes> => {
  let result = await db.Cuts.create({
    id: uuidv4(),
    name: cutData.name,
    photo: cutData.photo,
    weight: cutData.weight,
    fat: cutData.fat,
  });
  return result;
};
