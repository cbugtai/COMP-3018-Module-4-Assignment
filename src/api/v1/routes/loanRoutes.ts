import express, { Router } from "express"; 

const router: Router = express.Router();

router.post("/")
router.put("/:id/review")
router.get("/")
router.put("/:id/approve")

export default router;