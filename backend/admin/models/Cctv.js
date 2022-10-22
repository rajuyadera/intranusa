import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Cctv = db.define(
  "Cctv",
  {
    judul: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    specifikasi: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Cctv;
