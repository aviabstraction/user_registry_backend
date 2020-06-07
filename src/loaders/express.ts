import express, { Application } from "express";
import cors from "cors";
import routes from "../api";
import config from "../config/config";
import multer from "multer";
import path from "path";

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

  app.enable("trust proxy");

  app.use(cors());

  app.use(express.json());

  app.use(express.static("../../public"));

  app.use(prefix, routes());

  console.log(__dirname);
  const storage = multer.diskStorage({
    destination: __dirname + "/public/uploads",
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

  const upload = multer({
    storage,
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
      checkFileType(file, cb);
    },
  }).single("profile");

  app.post("/upload", (req: any, res) => {
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(req.file);
        res.send("uploaded");
      }
    });
  });

  function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  }
};
