import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.config";

import type { Model } from "sequelize";

interface TypeModel {
  id: number;
  name: string;
}

const Type = sequelize.define<Model<TypeModel>>("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false }
});

export default Type;
