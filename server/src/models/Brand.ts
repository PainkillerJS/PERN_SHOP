import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

import type { Model } from "sequelize";

interface BrandModel {
  id: number;
  name: string;
}

const Brand = sequelize.define<Model<BrandModel>>("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

export default Brand;
