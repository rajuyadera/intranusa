import express from "express"
import {
    getIt,
    getItById,
    saveIt,
    updateIt,
    deleteIt
} from "../controller/ItSolution.js"

const router = express.Router()

router.get("/itsupport", getIt)
router.get("/itsupport/:id", getItById)
router.post("/itsupport", saveIt)
router.patch("/itsupport/:id", updateIt)
router.delete("/itsupport/:id", deleteIt)

export default router