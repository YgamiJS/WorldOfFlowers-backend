import { Router } from "express";
import wrap from "../async-wrapper";
import { AppClients } from "../../settings/clients";
import ProductsController from "./products.controller";

export default function products(dbClients: AppClients["database"]) {
  const controller = new ProductsController(dbClients);
  const c = controller;

  const user = Router();

  user.get("/", wrap(c.getProducts.bind(c)));

  return user;
}
