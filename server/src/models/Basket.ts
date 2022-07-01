import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

import type { Model } from "sequelize";

interface BasketModel {
  id: number;
  userId?: number;
}

const Basket = sequelize.define<Model<BasketModel>>("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export default Basket;
