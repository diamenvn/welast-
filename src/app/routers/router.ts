import { Router } from "express";
import reposController from "./repos/repos.controller";

const api = Router().use(reposController);
export default Router().use("/repos", api);
