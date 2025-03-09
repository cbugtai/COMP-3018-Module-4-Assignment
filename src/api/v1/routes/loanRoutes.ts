import express, { Router } from "express";

import * as loanController from "../controllers/loanController"
import authenticate from "../middleware/authentication";
import isAuthorized from "../middleware/authorization";

const router: Router = express.Router();

// URL/api/v1/loans

//Create Loan
router.post(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["admin", "user"] }),
    loanController.createLoan)

//Review Loan
router.put(
    "/:id/review",
    authenticate,
    isAuthorized({ hasRole: ["admin", "officer"] }),
    loanController.reviewLoan)

//Get All Loans
router.get(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["admin", "officer", "manager"] }),
    loanController.getLoans)

//Approve Loans
router.put(
    "/:id/approve",
    authenticate,
    isAuthorized({ hasRole: ["admin", "manager"] }),
    loanController.approveLoan)

export default router;