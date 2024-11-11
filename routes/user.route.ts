import express from "express";
import { createUser, findUser, getUser } from "../controller/user.controller";
const route = express.Router();

route.get("/all", getUser);
route.get("/one", findUser);
route.post("/create", createUser);

export default route;
