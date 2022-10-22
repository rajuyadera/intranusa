import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Panel = db.define(
  "panel",
  {
    judul: DataTypes.STRING,
    harga: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Panel;

