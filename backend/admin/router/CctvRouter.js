import express from "express";
import {
  getCctv,
  getCctvId,
  saveCctv,
  updateCctv,
  deleteCctv,
} from "../controller/Cctv.js";

const router = express.Router();

// Router Cctv
router.get("/cctv", getCctv);
router.get("/cctv/:id", getCctvId);
router.post("/cctv", saveCctv);
router.patch("/cctv/:id", updateCctv);
router.delete("/cctv/:id", deleteCctv);

export default router