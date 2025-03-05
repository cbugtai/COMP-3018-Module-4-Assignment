import express, { Express } from "express";
import setupSwagger from "../config/swagger";
import morgan from "morgan";

const app: Express = express();

setupSwagger(app);
app.use(morgan("combined"));
app.use(express.json());

/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks
 */
app.get("/tasks", (req, res) => {
	res.send("Retrieve tasks");
});

export default app;