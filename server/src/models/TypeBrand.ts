import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

import type { Model } from "sequelize";

interface TypeModel {
  id: number;
  brandId?: number;
  typeId?: number;
}

const TypeBrand = sequelize.define<Model<TypeModel>>("type-brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default TypeBrand;
