import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";
import Basket from "./Basket";
import Device from "./Device";

const BasketDevice = sequelize.define("basket-device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

BasketDevice.belongsTo(Basket);
BasketDevice.belongsTo(Device);

export default BasketDevice;
