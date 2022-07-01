import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

import type { Model } from "sequelize";

interface DeviceModel {
  id: number;
  name: string;
  price: number;
  img: string;
  rating: number;
  brandId?: number;
  typeId?: number;
}

const Device = sequelize.define<Model<DeviceModel>>("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false }
});

export default Device;
