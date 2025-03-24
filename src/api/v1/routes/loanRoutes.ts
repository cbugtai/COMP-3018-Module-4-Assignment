import express, { Router } from "express";

import * as loanController from "../controllers/loanController"
import authenticate from "../middleware/authentication";
import isAuthorized from "../middleware/authorization";

const router: Router = express.Router();

// URL/api/v1/loans

/**
 * @route POST /
 * @description Creates a Loan
 * 
 * @openapi
 * /api/v1/loans/:
 *   post:
 *     summary: Allows a user to create a loan
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Loan'
 *     responses:
 *       201:
 *         description: Loan Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Loan'
 *       401:
 *         description: Invalid Token
 *       403:
 *         description: Insufficient Role
 */
router.post(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["admin", "user"] }),
    loanController.createLoan)

/**
 * @route PUT /:id/review
 * @description Review a loan
 * 
 * @openapi
 * /api/v1/loans/{id}/review:
 *   put:
 *     summary: Allows an officer to review a loan
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Loan ID to be reviewed
 *     responses:
 *       200:
 *         description: Loan Reviewed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Loan'
 *       401:
 *         description: Invalid Token
 *       403:
 *         description: Insufficient Role
 */
router.put(
    "/:id/review",
    authenticate,
    isAuthorized({ hasRole: ["admin", "officer"] }),
    loanController.reviewLoan)

/**
 * @route GET /
 * @description Get All Loans
 * 
 * @openapi
 * /api/v1/loans/:
 *   get:
 *     summary: Allows an officer or manager to retrive all loans
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of loans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Loan"
 *       401:
 *         description: Invalid Token
 *       403:
 *         description: Insufficient Role 
 */
router.get(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["admin", "officer", "manager"] }),
    loanController.getLoans)

/**
 * @route PUT /:id/approve
 * @description Approve Loan
 * 
 * @openapi
 * /api/v1/loans/{id}/approve:
 *   put:
 *     summary: Allows a manager to approve a loan
 *     tags: [Loan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Loan ID to be approved
 *     responses:
 *       200:
 *         description: Loan Approved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Loan'
 *       401:
 *         description: Invalid Token
 *       403:
 *         description: Insufficient Role
 */
router.put(
    "/:id/approve",
    authenticate,
    isAuthorized({ hasRole: ["admin", "manager"] }),
    loanController.approveLoan)

export default router;