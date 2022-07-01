import { DataTypes, Model } from "sequelize";

import sequelize from "../config/sequelize.config";

interface DeviceInfoModel {
  id: number;
  title: string;
  description: string;
  deviceId?: number;
}

const DeviceInfo = sequelize.define<Model<DeviceInfoModel>>("device-info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false }
});

export default DeviceInfo;
