import express from "express";
import { loginRoute } from "./routes/loginRoute.js";

const router = express.Router();

router.post("/login", loginRoute);

export { router };
