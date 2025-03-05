import { Request, Response } from "express";

export const createLoan = (req: Request, res: Response) => {
    res.status(200).send("Loan Created");
};

export const reviewLoan = (req: Request, res: Response) => {
    res.status(200).send("Loan Reviewed");
};

export const getLoans = (req: Request, res: Response) => {
    res.status(200).send("Loans Retrieved");
};

export const approveLoan = (req: Request, res: Response) => {
    res.status(200).send("Loan Approved");
};