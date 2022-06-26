import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

const DeviceInfo = sequelize.define("device-info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false }
});

export default DeviceInfo;
