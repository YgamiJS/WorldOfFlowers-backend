import { Router } from "express";
import wrap from "../async-wrapper";
import { AppClients } from "../../settings/clients";
import UserController from "./user.controller";

export default function user(dbClients: AppClients["database"]) {
  const controller = new UserController(dbClients);
  const c = controller;

  const user = Router();

  user.get("/", wrap(c.singinUser.bind(c)));
  user.post("/", wrap(c.loginUser.bind(c)));

  return user;
}
