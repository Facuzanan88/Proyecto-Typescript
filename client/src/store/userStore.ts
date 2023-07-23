import create from "zustand";
import UserAttributes from "../interfaces/user";
import axios from "axios";

interface UserStoreState extends UserAttributes {
  getUser: (id: string) => Promise<void>;
}

export const useUserStore = create<UserStoreState>((set) => ({
  id: undefined,
  name: undefined,
  lastname: undefined,
  email: undefined,
  cel: undefined,
  street: undefined,
  number: undefined,
  apartment: undefined,
  comment: undefined,
  getUser: async (id: string) => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    const user = await res.data;

    set((state) => ({
      ...state,
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      cel: user.cel,
      street: user.street,
      number: user.number,
      apartment: user.apartment,
      comment: user.comment,
    }));
  },
}));
