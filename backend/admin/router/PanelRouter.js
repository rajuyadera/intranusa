import express from "express";
import {
  getPanel,
  getPanelById,
  savePanel,
  updatePanel,
  deletePanel,
} from "../controller/Panel.js";

const router = express.Router();

router.get("/panel", getPanel);
router.get("/panel/:id", getPanelById);
router.post("/panel", savePanel);
router.patch("/panel/:id", updatePanel);
router.delete("/panel/:id", deletePanel);

export default router;