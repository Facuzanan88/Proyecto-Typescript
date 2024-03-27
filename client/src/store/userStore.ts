import create from "zustand";
import UserAttributes from "../interfaces/user";
import axios from "axios";
import UserAtributtes from "../interfaces/user";

interface UserStoreState extends UserAttributes {
  users: UserAtributtes[];
  user: UserAtributtes;
  getUsers: () => Promise<UserAttributes[]>;
  createUser: (user: object) => Promise<UserAtributtes>;
  userByMail: (email: string) => Promise<UserAtributtes> | null;
  modifyUser: (updateUser: object) => Promise<void>;
}

export const useUserStore = create<UserStoreState>((set) => ({
  users: [],
  user: {
    name: undefined,
    lastname: undefined,
    age: undefined,
    photo: undefined,
    email: undefined,
    cel: undefined,
    street: undefined,
    number: undefined,
  },
  id: "",
  name: "",
  lastname: "",
  photo: "",
  age: 0,
  email: "",
  cel: 0,
  street: "",
  number: 0,
  apartment: false,
  comment: "",

  getUsers: async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      const users = await res.data;
      set({ users });
      return users;
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
      throw error; // Lanzar el error para que pueda ser manejado en el componente
    }
  },

  createUser: async (user: object) => {
    try {
      const res = await axios.post("http://localhost:3001/users", user);
      const newUser = await res.data;

      set((state) => ({
        user: {
          id: newUser.id,
          name: newUser.name,
          lastname: newUser.lastname,
          photo: newUser.photo,
          age: newUser.age,
          email: newUser.email,
          cel: newUser.cel,
          street: newUser.street,
          number: newUser.number,
          apartment: newUser.apartment,
          comment: newUser.comment,
        },
      }));
      return newUser;
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error o registrarlo.
      console.error("Error al crear el usuario:", error);
    }
  },
  userByMail: async (email: string) => {
    try {
      const res = await axios.get(`http://localhost:3001/users?email=${email}`);
      const user = await res.data;

      if (user) {
        set((state) => ({
          ...state,
          user: {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            photo: user.photo,
            age: user.age,
            email: user.email,
            cel: user.cel,
            street: user.street,
            number: user.number,
            apartment: user.apartment,
            comment: user.comment,
          },
        }));
        return user;
      } else {
        console.log("no existe un usuario con ese mail");
      }
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
        user: {
          id: newUser.id,
          name: newUser.name,
          lastname: newUser.lastname,
          photo: newUser.photo,
          age: newUser.age,
          email: newUser.email,
          cel: newUser.cel,
          street: newUser.street,
          number: newUser.number,
          apartment: newUser.apartment,
          comment: newUser.comment,
        },
      }));
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje de error o registrarlo.
      console.error("Error al obtener el usuario:", error);
    }
  },
}));
