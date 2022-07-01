import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

import type { Model } from "sequelize";

interface RatingModel {
  id: number;
  rate: number;
  deviceId?: number;
  userId?: number;
}

const Rating = sequelize.define<Model<RatingModel>>("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false }
});

export default Rating;
