import express, { Router } from "express";

import * as loanController from "../controllers/loanController"
import authenticate from "../middleware/authenticate";

const router: Router = express.Router();

router.post(
    "/",
    authenticate,
    loanController.createLoan)

router.put(
    "/:id/review",
    authenticate, 
    loanController.reviewLoan)

router.get(
    "/",
    authenticate,
    loanController.getLoans)

router.put(
    "/:id/approve",
    authenticate,
    loanController.approveLoan)

export default router;