import express from "express";

import { loginRoute } from "./routes/loginRoute.js";
import { gettodosRoute } from "./routes/gettodosRoute.js";
import { isLoggedIn } from "./middlewares/isLoggedIn.js";

// router initialisation
const router = express.Router();

// routes (endpoints)
router.post("/login", loginRoute);
router.get("/todos",isLoggedIn, gettodosRoute);

export { router };
