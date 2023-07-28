import create from "zustand";
import UserAttributes from "../interfaces/user";
import axios from "axios";
import UserAtributtes from "../interfaces/user";

interface UserStoreState extends UserAttributes {
  getUser: (id: string) => Promise<void>;
  createUser: (user: object) => Promise<void>;
  userByMail: (email: string) => Promise<UserAtributtes> | undefined;
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
  createUser: async (user: any) => {
    const res = await axios.post("http://localhost:3001/users", user);
    const newUser = await res.data;

    set((state) => ({
      ...state,
      id: newUser.id,
      name: newUser.name,
      lastname: newUser.lastname,
      email: newUser.email,
      cel: newUser.cel,
      street: newUser.street,
      number: newUser.number,
      apartment: newUser.apartment,
      comment: newUser.comment,
    }));
  },
  userByMail: async (email: string) => {
    const res = await axios.get(`http://localhost:3001/users?email=${email}`);
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
    return user;
  },
}));
