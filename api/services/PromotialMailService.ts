import db from "../models";
import { v4 as uuidv4 } from "uuid";
import PromotialMailAtributte from "../interfaces/promotialMail";

export const getPromotialMail = async (): Promise<PromotialMailAtributte[]> => {
  let result = await db.PromotialMail.findAll();
  return result;
};

export const createPromotialMail = async (
  PromotialMailData: any
): Promise<PromotialMailAtributte> => {
  let result = await db.PromotialMail.create({
    id: uuidv4(),
    email: PromotialMailData.email,
    login: false,
    delete: false,
  });
  return result;
};

export const getPromotialMailByMail = async (
  email: string
): Promise<PromotialMailAtributte> => {
  let result = await db.PromotialMail.findOne({ where: { email: email } });
  return result;
};
