import create from "zustand";
import cutsAttributes from "../interfaces/cuts";
import axios from "axios";
import CutsAtributtes from "../interfaces/cuts";

interface CutStoreState extends CutsAtributtes {
  cowById(idCow: any): unknown;
  cowCuts: cutsAttributes[] | null;
  getCows: () => Promise<CutsAtributtes[] | null>;
  createCows: (cow: object) => Promise<CutsAtributtes>;
  /*   cowById: (cowId: string) => Promise<CutsAtributtes> | null;
  modifyCow: (updateCow: object) => Promise<void>; */
}

export const useCowStore = create<CutStoreState>((set) => ({
  cowCuts: [],
  id: "",
  name: "",
  photo: "",
  price: 0,
  fat: 0,
  bone: 0,
  description: "",
  stock: false,

  getCows: async () => {
    try {
      const res = await axios.get("http://localhost:3001/cow");
      const cowCuts = res.data;
      set({ cowCuts });
      return cowCuts;
    } catch (error) {
      console.log("Error al obtener los cortes de vaca:", error);
      throw error; // Lanzar el error para que pueda ser manejado en el componente
    }
  },

  createCows: async (cow: Object) => {
    try {
      const res = await axios.post("http://localhost:3001/cow", cow);
      const newCow = await res.data;

      set((state) => ({
        id: newCow.id,
        name: newCow.name,
        photo: newCow.photo,
        price: newCow.price,
        fat: newCow.fat,
        bone: newCow.bone,
        description: newCow.description,
        stock: newCow.stock,
      }));
      return newCow;
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error o registrarlo.
      console.error("Error al crear un corte de vaca nuevo:", error);
    }
  },

  cowById: async (id: string) => {
    try {
      const res = await axios.get(`http://localhost:3001/cow/${id}`);
      const cowCut = await res.data;

      set((state) => ({
        id: cowCut.id,
        name: cowCut.name,
        photo: cowCut.photo,
        price: cowCut.price,
        fat: cowCut.fat,
        bone: cowCut.bone,
        description: cowCut.description,
        stock: cowCut.stock,
      }));
      return cowCut;
    } catch (error) {
      console.error("Error al obtener el corte de carne por Id", error);
    }
  },
}));
