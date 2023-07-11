import { Model, UUIDV4 } from "sequelize";

interface userAtributtes {
  id: string;
  name: string;
  subname: string;
  age: string;
  email: string;
  cel: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<userAtributtes> implements userAtributtes {
    id!: string;
    name!: string;
    subname!: string;
    age!: string;
    email!: string;
    cel!: number;
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
      subname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
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
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
