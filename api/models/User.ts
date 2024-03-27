import { Model, UUIDV4 } from "sequelize";
import UserAtributtes from "../interfaces/user";

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAtributtes> implements UserAtributtes {
    age: number | undefined;
    id!: string;
    name!: string;
    lastname!: string;
    photo!: string;
    email!: string;
    cel!: number;
    street!: string;
    number!: number;
    apartment!: boolean;
    comment!: string;
    deleted!: boolean;
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
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      cel: {
        type: DataTypes.BIGINT,
        allowNull: true,
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
        allowNull: true,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
