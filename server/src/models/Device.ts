import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";
import DeviceInfo from "./DeviceInfo";
import Type from "./Type";
import Brand from "./Brand";
import Rating from "./Rating";
import BasketDevice from "./BasketDevice";

const Device = sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false }
});

Device.hasMany(DeviceInfo);
Device.hasMany(Rating);
Device.hasMany(BasketDevice);
Device.belongsTo(Type);
Device.belongsTo(Brand);

export default Device;
