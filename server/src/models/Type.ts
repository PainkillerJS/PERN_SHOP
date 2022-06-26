import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";
import Device from "./Device";
import Brand from "./Brand";
import TypeBrand from "./TypeBrand";

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

Type.hasMany(Device);
Type.belongsToMany(Brand, { through: TypeBrand });

export default Type;
