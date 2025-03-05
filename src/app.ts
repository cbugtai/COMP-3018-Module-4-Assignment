import express, { Express } from "express";
import morgan from "morgan";

import setupSwagger from "../config/swagger";
import loanRoutes from "../src/api/v1/routes/loanRoutes"
import userRoutes from "./api/v1/routes/userRoutes";

const app: Express = express();

setupSwagger(app);
app.use(morgan("combined"));
app.use(express.json());

//routes
app.use("/api/v1/loans", loanRoutes);
app.use("/api/v1/users", userRoutes);

export default app;