import express from "express";
import config from "./config/config";

const startServer = async () => {
  const app = express();

  const { port } = config;

  await require("./loaders").default({ expressApp: app });

  app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
  });
};

startServer();
