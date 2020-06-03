import { Router, Request, Response, NextFunction } from "express";

const route = Router();
export default (app: Router) => {
  app.use("/auth", route);

  route.get("/signup", (req: Request, res: Response) => {
    res.send("signed up");
  });

  route.get("/login", (req: Request, res: Response) => {
    res.send("logged in");
  });

  route.get("/logout", (req: Request, res: Response) => {
    res.send("logged out");
  });
};
