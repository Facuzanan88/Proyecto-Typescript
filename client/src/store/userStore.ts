import create from "zustand";
import UserAttributes from "../interfaces/user";
import axios from "axios";
import UserAtributtes from "../interfaces/user";

interface UserStoreState extends UserAttributes {
  getUser: (id: string) => Promise<any>;
  createUser: (user: object) => Promise<UserAtributtes>;
  userByMail: (email: string) => Promise<UserAtributtes> | null;
  modifyUser: (updateUser: object) => Promise<void>;
}

export const useUserStore = create<UserStoreState>((set) => ({
  id: "",
  name: "",
  lastname: "",
  email: "",
  cel: 0,
  street: "",
  number: 0,
  apartment: false,
  comment: "",
  getUser: async (id: string) => {
    try {
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      const user = await res.data;
      console.log(user, "usuario");

      set((state) => ({
        ...state,
        id: user.id,
        name: user.given_name,
        lastname: user.family_name,
        email: user.email,
        cel: user.cel,
        street: user.street,
        number: user.number,
        apartment: user.apartment,
        comment: user.comment,
      }));
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error o registrarlo.
      console.error("Error al obtener el usuario:", error);
    }
  },

  createUser: async (user: object) => {
    try {
      const res = await axios.get("http://localhost:3001/users", user);
      const newUser = await res.data;
      console.log(res);

      set((state) => ({
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
      return newUser;
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error o registrarlo.
      console.error("Error al obtener el usuario:", error);
    }
  },
  userByMail: async (email: string) => {
    try {
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
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error o registrarlo.
      console.error("Error al obtener el usuario:", error);
    }
  },
  modifyUser: async (user: object) => {
    try {
      const res = await axios.put("http://localhost:3001/users", user);
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
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error o registrarlo.
      console.error("Error al obtener el usuario:", error);
    }
  },
}));
