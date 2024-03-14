import { Model, UUIDV4 } from "sequelize";
import PromotialMailAtributtes from "../interfaces/promotialMail";

module.exports = (sequelize: any, DataTypes: any) => {
  class PromotialMail
    extends Model<PromotialMailAtributtes>
    implements PromotialMailAtributtes
  {
    id!: string;
    email!: string;
    login!: boolean;
    delete!: boolean;
  }

  PromotialMail.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      login: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      delete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PromotialMail",
    }
  );

  return PromotialMail;
};
