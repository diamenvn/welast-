import { Request, Response, NextFunction } from "express";
import routes from "./src/app/routers/router";
import { corsOpts } from "./src/app/config/app.config";

const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors(corsOpts));

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "APP is running on /repos" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});
