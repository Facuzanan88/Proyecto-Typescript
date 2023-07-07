import { Model, UUIDV4 } from "sequelize";

interface userAtributtes {
  id: string;
  nombre: string;
  apellido: string;
  edad: string;
  email: string;
  telefono: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<userAtributtes> implements userAtributtes {
    id!: string;
    nombre!: string;
    apellido!: string;
    edad!: string;
    email!: string;
    telefono!: number;
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
