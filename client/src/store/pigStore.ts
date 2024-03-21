import create from "zustand";
import cutsAttributes from "../interfaces/cuts";
import axios from "axios";
import CutsAtributtes from "../interfaces/cuts";

interface CutStoreState extends CutsAtributtes {
  pigById(idCow: any): unknown;
  pigCuts: cutsAttributes[] | null;
  getPigs: () => Promise<CutsAtributtes[] | null>;
  createPigs: (cow: object) => Promise<CutsAtributtes>;
  /*   cowById: (cowId: string) => Promise<CutsAtributtes> | null;
  modifyCow: (updateCow: object) => Promise<void>; */
}

export const usePigStore = create<CutStoreState>((set) => ({
  pigCuts: [],
  id: "",
  name: "",
  photo: "",
  price: 0,
  fat: 0,
  bone: 0,
  description: "",
  stock: false,

  getPigs: async () => {
    try {
      const res = await axios.get("http://localhost:3001/pig");
      const pigCuts = res.data;
      set({ pigCuts });
      return pigCuts;
    } catch (error) {
      console.log("Error al obtener los cortes de vaca:", error);
      throw error; // Lanzar el error para que pueda ser manejado en el componente
    }
  },

  createPigs: async (pig: Object) => {
    try {
      const res = await axios.post("http://localhost:3001/cow", pig);
      const newPig = await res.data;

      set((state) => ({
        id: newPig.id,
        name: newPig.name,
        photo: newPig.photo,
        price: newPig.price,
        fat: newPig.fat,
        bone: newPig.bone,
        description: newPig.description,
        stock: newPig.stock,
      }));
      return newPig;
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error o registrarlo.
      console.error("Error al crear un corte de vaca nuevo:", error);
    }
  },

  pigById: async (id: string) => {
    try {
      const res = await axios.get(`http://localhost:3001/pig/${id}`);
      const pigCut = await res.data;

      set((state) => ({
        id: pigCut.id,
        name: pigCut.name,
        photo: pigCut.photo,
        price: pigCut.price,
        fat: pigCut.fat,
        bone: pigCut.bone,
        description: pigCut.description,
        stock: pigCut.stock,
      }));
      return pigCut;
    } catch (error) {
      console.error("Error al obtener el corte de carne por Id", error);
    }
  },
}));
