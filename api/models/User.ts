import { Model, UUIDV4 } from "sequelize";
import UserAtributtes from "../interfaces/user";

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAtributtes> implements UserAtributtes {
    id!: string;
    name!: string;
    lastname!: string;
    email!: string;
    cel!: number;
    street!: string;
    number!: number;
    apartment!: boolean;
    comment!: string;
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      apartment: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
