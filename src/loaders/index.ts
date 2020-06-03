import expressLoader from "./express";
import mongoLoader from "./mongoose";
import Logger from "./logger";

export default async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  Logger.info("Express app loaded");

  await mongoLoader();
  Logger.info("Mongo DB loaded");
};
