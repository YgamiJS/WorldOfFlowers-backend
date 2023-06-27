import { Request, Response, NextFunction } from "express";
import type { ApiClients } from "../../types";

export default class UserController {
  constructor(private db: ApiClients["database"]) {}

  public async getProducts(req: Request, res: Response) {
    const products = await this.db.products.findMany();

    res.json(products);
  }
}
