import { Router } from "express";
import wrap from "../async-wrapper";
import { AppClients } from "../../settings/clients";
import FavoriteController from "./favoriteProduct.controller";

export default function favoriteProducts(dbClients: AppClients["database"]) {
  const controller = new FavoriteController(dbClients);
  const c = controller;

  const user = Router();

  user.get("/", wrap(c.getFavoriteProducts.bind(c)));
  user.post("/", wrap(c.addFavoriteProduct.bind(c)));
  user.patch("/increment", wrap(c.incrementCountFavoriteProduct.bind(c)));
  user.patch("/decrement", wrap(c.decrementCountFavoriteProduct.bind(c)));
  user.delete("/", wrap(c.removeFavoriteProduct.bind(c)));

  return user;
}
