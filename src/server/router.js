import express from "express";

import { loginRoute } from "./routes/loginRoute.js";
import { gettodosRoute } from "./routes/gettodosRoute.js";
import { isLoggedIn } from "./middlewares/isLoggedIn.js";
import { createTodoRoute } from "./routes/createTodoRoute.js";

// router initialisation
const router = express.Router();

// routes (endpoints)
router.post("/login", loginRoute);

// protected routes
router.get("/todos", isLoggedIn, gettodosRoute);
router.post("/todos", isLoggedIn, createTodoRoute);
// todo update
// todo delete
export { router };
