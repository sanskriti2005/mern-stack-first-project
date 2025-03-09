import express from "express";

import { loginRoute } from "./routes/loginRoute.js";
import { gettodosRoute } from "./routes/gettodosRoute.js";
import { isLoggedIn } from "./middlewares/isLoggedIn.js";
import { createTodoRoute } from "./routes/createTodoRoute.js";
import { updateTodoRoute } from "./routes/updateTodoRoute.js";
import { deleteTodoRoute } from "./routes/deleteTodoRoute.js";

// router initialisation
const router = express.Router();

// routes (endpoints)
router.post("/login", loginRoute);

// protected routes
router.get("/todos", isLoggedIn, gettodosRoute);
router.post("/todos", isLoggedIn, createTodoRoute);
router.put("/todos/:id", isLoggedIn, updateTodoRoute)
router.delete("/todos/:id", isLoggedIn, deleteTodoRoute);

export { router };
