import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../../services/user";
import Logger from "../../loaders/logger";

const route = Router();

export default (app: Router) => {
  app.use("/assets", route);

  route.post(
    "/images",
    async (req: Request, res: Response, next: NextFunction) => {
      const { image } = req.body;

      Logger.info("Uploaded Image");
      res.status(201).json();
    }
  );

  route.get(
    "/getoneuser",
    async (req: Request, res: Response, next: NextFunction) => {
      const { image } = req.body;

      Logger.info("Fetched Single Image");
      res.status(201).json();
    }
  );
};
