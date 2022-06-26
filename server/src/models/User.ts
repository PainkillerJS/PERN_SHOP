import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";
import Basket from "./Basket";
import Rating from "./Rating";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  roles: { type: DataTypes.STRING, defaultValue: "USER" }
});

User.hasOne(Basket);
User.hasMany(Rating);

export default User;
