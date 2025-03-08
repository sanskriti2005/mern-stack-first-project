import express from "express";
import { loginRoute } from "./routes/loginRoute.js";
import { todosRoute } from "./routes/todosRoute.js";
import { isLoggedIn } from "./middlewares/isLoggedIn.js";

// router initialisation
const router = express.Router();

// routes (endpoints)
router.post("/login", loginRoute);
router.get("/todos",isLoggedIn, todosRoute);

export { router };
