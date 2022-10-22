import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const It = db.define(
  "itsolution",
  {
    judul: DataTypes.STRING,
    keterangan: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

export default It;
