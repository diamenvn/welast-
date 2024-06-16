import { Router, Response, Request, NextFunction } from "express";
import { getRepos } from "./repos.service";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = await getRepos();
    const json = await query.json();
    const parseFromJson = JSON.parse(JSON.stringify(json));
    const filter = parseFromJson.filter((repository: any) => !repository.fork && repository.forks > 5);

    filter.sort((a: any, b: any) => {
      return new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf(); // descending
    });

    res.set({ "Content-Type": "application/json" });

    res.send(filter);
  } catch (error) {
    next(error);
  }
});

export default router;
