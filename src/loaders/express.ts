import express, { Application } from "express";
import cors from "cors";
import routes from "../api";
import config from "../config/config";

export default ({ app }: { app: Application }) => {
  const {
    api: { prefix },
  } = config;

  app.get("/", (req, res) => {
    res.send("Welcome to backend");
  });

  app.get("/status", (req, res) => {
    res.sendStatus(200);
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs

  app.enable("trust proxy");

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default

  app.use(cors());

  // Middleware that transforms the raw string of req.body into json

  app.use(express.json());

  app.use(prefix, routes());
};
