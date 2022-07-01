import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

import type { Model } from "sequelize";

interface BasketDeviceModel {
  id: number;
  basketId?: number;
  deviceId?: number;
}

const BasketDevice = sequelize.define<Model<BasketDeviceModel>>("basket-device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default BasketDevice;
