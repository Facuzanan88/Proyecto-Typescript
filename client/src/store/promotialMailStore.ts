import create from "zustand";
import promotialMailAtributte from "../interfaces/promotialMail";
import axios from "axios";
import PromotialMailAtributtester from "../interfaces/promotialMail";

interface PromotialMailStoreState extends PromotialMailAtributtester {
  promotialMail: promotialMailAtributte[] | null;
  getPromotialMail: () => Promise<promotialMailAtributte[] | null>;
  createPromotialMail: (
    promotialMail: object
  ) => Promise<PromotialMailAtributtester>;
}

export const usePromotialMailStore = create<PromotialMailStoreState>((set) => ({
  promotialMail: [],
  id: "",
  email: "",
  login: false,
  delete: false,

  getPromotialMail: async () => {
    try {
      const res = await axios.get("http://localhost:3001/promotialmail");
      const promotialMail = res.data;
      set({ promotialMail });
      return promotialMail;
    } catch (error) {
      console.log("Error al obtener los cortes de vaca:", error);
      throw error; // Lanzar el error para que pueda ser manejado en el componente
    }
  },

  createPromotialMail: async (promotialMail: Object) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/promotialmail",
        promotialMail
      );
      const newPromotialMail = await res.data;

      set((state) => ({
        id: newPromotialMail.id,
        email: newPromotialMail.email,
        login: false,
        delete: false,
      }));
      return newPromotialMail;
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error o registrarlo.
      console.error("Error al crear un corte de vaca nuevo:", error);
    }
  },
}));
