import { Router, Request, Response, NextFunction } from "express";
import { UserService } from "../../services/user";
import Logger from "../../loaders/logger";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);

  route.post(
    "/create",
    async (req: Request, res: Response, next: NextFunction) => {
      const { user_name, mobile_number, created_at, is_active } = req.body;

      const User = new UserService(
        user_name,
        mobile_number,
        created_at,
        is_active
      );
      const created_users = await User.createUser();
      Logger.info("Created Users");
      res.status(201).json(created_users);
    }
  );

  route.post(
    "/getoneuser",
    async (req: Request, res: Response, next: NextFunction) => {
      const { mobile_number } = req.body;
      console.log("mobile_number", req.body);
      const User = new UserService(null, mobile_number, null, null);
      const get_user = await User.getUser();
      Logger.info("Fetched Single User");
      res.status(201).json(get_user);
    }
  );

  route.get(
    "/getallusers",
    async (req: Request, res: Response, next: NextFunction) => {
      const User = new UserService();
      const get_users = await User.getAllUsers();
      Logger.info("Fetched All Users");
      res.status(201).json(get_users);
    }
  );
};
