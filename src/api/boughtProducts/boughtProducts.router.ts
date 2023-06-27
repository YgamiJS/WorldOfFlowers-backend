import { Router } from "express";
import wrap from "../async-wrapper";
import { AppClients } from "../../settings/clients";
import BoughtProductsController from "./boughtProducts.controller";

export default function boughtProducts(dbClients: AppClients["database"]) {
  const controller = new BoughtProductsController(dbClients);
  const c = controller;

  const user = Router();

  user.get("/", wrap(c.getboughtProducts.bind(c)));
  user.post("/", wrap(c.addBoughtProduct.bind(c)));
  user.delete("/", wrap(c.removeBoughtProduct.bind(c)));

  return user;
}
