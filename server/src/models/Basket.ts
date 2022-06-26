import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";
import User from "./User";
import BasketDevice from "./BasketDevice";

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

Basket.hasMany(BasketDevice);
Basket.belongsTo(User);

export default Basket;
