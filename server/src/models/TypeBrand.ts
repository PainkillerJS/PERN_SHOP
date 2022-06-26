import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

const TypeBrand = sequelize.define("type-brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default TypeBrand;
