import { Request, Response } from "express";
import routes from "./src/app/routers/router";

const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "APP is running on /repos" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});
