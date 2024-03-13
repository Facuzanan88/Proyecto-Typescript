import { Model, UUIDV4 } from "sequelize";
import CutsAtributtes from "../interfaces/cuts";

module.exports = (sequelize: any, DataTypes: any) => {
  class CowCuts extends Model<CutsAtributtes> implements CutsAtributtes {
    id!: string;
    name!: string;
    photo!: string;
    price!: number;
    fat!: number;
    bone!: number;
    description!: string;
    stock!: boolean;
  }

  CowCuts.init(
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
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fat: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      bone: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CowCuts",
    }
  );

  return CowCuts;
};
