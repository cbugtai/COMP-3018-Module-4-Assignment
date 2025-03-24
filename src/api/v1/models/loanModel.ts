/**
 * @interface Loan
 * @description Represents a loan object.
 * 
 * @openapi
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for a loan
 *         description:
 *           type: string
 *           description: The purpose stated for the loan
 *         amount:
 *           type: number
 *           description: Amount of the loan
 *         createdAt:
 *           type: date-time
 *           description: The timestamp when the loan is created
 */
export type Loan = {
    id: string;
    description: string;
    amount: number;
    createdAt: Date;
};