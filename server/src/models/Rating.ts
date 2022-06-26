import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false }
});

export default Rating;
