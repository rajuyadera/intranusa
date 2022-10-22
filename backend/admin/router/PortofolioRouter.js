import express from "express";
import {
  getPortofolio,
  getPortofolioById,
  savePortofolio,
  updatePortofolio,
  deletePortofolio,
} from "../controller/Portofolio.js";

const router = express.Router();

// router portofolio
router.get("/portofolio", getPortofolio);
router.get("/portofolio/:id", getPortofolioById);
router.post("/portofolio", savePortofolio);
router.patch("/portofolio/:id", updatePortofolio);
router.delete("/portofolio/:id", deletePortofolio);

export default router;
