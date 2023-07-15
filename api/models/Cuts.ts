import { Model, UUIDV4 } from "sequelize";
import CutsAtributtes from "../interfaces/cuts";

module.exports = (sequelize: any, DataTypes: any) => {
  class Cuts extends Model<CutsAtributtes> implements CutsAtributtes {
    id!: string;
    name!: string;
    photo!: string;
    weight!: number;
    fat!: number;
  }

  Cuts.init(
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
    },
    {
      sequelize,
      modelName: "Cuts",
    }
  );

  return Cuts;
};
