import { Router, Request, Response, NextFunction } from "express";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);

  route.get("/users", (req: Request, res: Response) => {
    res.send("welcome users");
  });
};
