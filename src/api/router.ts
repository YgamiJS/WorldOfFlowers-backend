import { ApiClients } from "../types";
import { Router } from "express";
import products from "./products/products.router";
import user from "./user/user.router";
import favoriteProducts from "./favoriteProducts/favoriteProducts.router";
import boughtProducts from "./boughtProducts/boughtProducts.router";

export default function api(clients: ApiClients) {
  const router = Router();

  router.use("/user", user(clients.database));
  router.use("/products", products(clients.database));
  router.use("/favoriteProducts", favoriteProducts(clients.database));
  router.use("/boughtProducts", boughtProducts(clients.database));

  return router;
}
