import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

const BasketDevice = sequelize.define("basket-device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default BasketDevice;
