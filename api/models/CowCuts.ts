import { Model, UUIDV4 } from "sequelize";
import CutsAtributtes from "../interfaces/cuts";

module.exports = (sequelize: any, DataTypes: any) => {
  class CowCuts extends Model<CutsAtributtes> implements CutsAtributtes {
    id!: string;
    name!: string;
    photo!: string;
    weight!: number;
    fat!: number;
    bone!: number;
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
      weight: {
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
    },
    {
      sequelize,
      modelName: "CowCuts",
    }
  );

  return CowCuts;
};
