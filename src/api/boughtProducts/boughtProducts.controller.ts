import { Request, Response, NextFunction } from "express";
import type { ApiClients } from "../../types";

export default class BoughtProductsController {
  constructor(private db: ApiClients["database"]) {}

  public async getboughtProducts(req: Request, res: Response) {
    const login = req.cookies.login;

    const boughtProducts = await this.db.user.findMany({
      where: {
        login,
        select: {
          boughtProducts: true,
        },
      },
    });

    res.json(boughtProducts);
  }

  public async addBoughtProduct(req: Request, res: Response) {
    const login = req.cookies.login;

    const user = await this.db.user.findUnique({ where: { login } });
    const boughtProducts = await this.db.boughtProducts.createMany({
      data: {
        ...req.body,
        user: { connect: { id: user.id } },
      },
    });

    res.json(boughtProducts);
  }

  public async removeBoughtProduct(req: Request, res: Response) {
    const login = req.cookies.login;

    const user = await this.db.user.findUnique({ where: { login } });
    const boughtProduct = await this.db.boughtProduct.delete({
      data: {
        title: req.body.title,
        user: { connect: { id: user.id } },
      },
    });

    res.json(boughtProduct);
  }
}
