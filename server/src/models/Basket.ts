import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default Basket;
