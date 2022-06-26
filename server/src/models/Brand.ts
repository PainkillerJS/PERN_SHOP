import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";
import Device from "./Device";
import TypeBrand from "./TypeBrand";
import Type from "./Type";

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

Brand.hasMany(Device);
Brand.belongsToMany(Type, { through: TypeBrand });

export default Brand;
