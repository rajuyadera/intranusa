import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import db from "./config/Database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./router/index.js";
import PortofolioRouter from "./router/PortofolioRouter.js";
import CctvRouter from "./router/CctvRouter.js";
import PanelRouter from "./router/PanelRouter.js"
import ItRouter from "./router/ItSolution.js"

dotenv.config();

const app = express();

// koneksi database
try {
  await db.authenticate();
  console.log("databased connected");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(router);
app.use(PortofolioRouter);
app.use(CctvRouter);
app.use(PanelRouter)
app.use(ItRouter)

app.listen(5000, () => {
  console.log("server running");
});
