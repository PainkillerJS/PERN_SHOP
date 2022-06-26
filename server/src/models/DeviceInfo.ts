import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";
import Device from "./Device";

const DeviceInfo = sequelize.define("device-info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false }
});

DeviceInfo.belongsTo(Device);

export default DeviceInfo;
