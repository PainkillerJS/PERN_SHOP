import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

export default Brand;
