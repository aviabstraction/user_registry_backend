import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(" .env file not found");
}

export default {
  port: parseInt(process.env.PORT, 10) || 8080,
  databaseURL: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  logs: {
    level: process.env.LOG_LEVEL || "debug",
  },
  api: {
    prefix: "/api",
  },
};
