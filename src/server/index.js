import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { router } from "./router.js";
dotenv.config();
const app = express();

// test endpoint
app.get("/", (req, res) => {
  res.send(`SECRET is: ${process.env.SECRET}`);
});

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

// connecting the database AND THEN listening to activity on the server
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(8080, () => {
    console.log(`Your first server is running on port 8080`);
  });
});
