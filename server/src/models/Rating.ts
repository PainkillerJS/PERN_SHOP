import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";
import User from "./User";
import Device from "./Device";

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false }
});

Rating.belongsTo(User);
Rating.belongsTo(Device);

export default Rating;
