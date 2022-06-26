import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

export default Type;
