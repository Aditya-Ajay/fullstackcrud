import express from "express";

import {
  getUser,
  specificUser,
  postUser,
  patchUser,
  deleteUser,
} from "../controller/userController.js";

export const route = express.Router();

route.get("/user", getUser);

route.get("/user/:id", specificUser);

route.post("/user", postUser);

route.patch("/user/:id", patchUser);

route.delete("/user/:id", deleteUser);
