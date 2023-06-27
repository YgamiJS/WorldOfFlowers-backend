import { Request, Response, NextFunction } from "express";
import type { ApiClients } from "../../types";

export default class FavoriteController {
  constructor(private db: ApiClients["database"]) {}

  public async getFavoriteProducts(req: Request, res: Response) {
    const login = req.cookies.login;

    const favoriteProducts = await this.db.user.findMany({
      where: {
        login,
        select: {
          favoriteProducts: true,
        },
      },
    });

    res.json(favoriteProducts);
  }

  public async addFavoriteProduct(req: Request, res: Response) {
    const login = req.cookies.login;

    const user = await this.db.user.findUnique({ where: { login } });
    const favoriteProduct = await this.db.favoriteProducts.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        slider: req.body.img,
        country: req.body.country,
        color: req.body.color,
        type: req.body.type,
        collection: req.body.collection,
        user: { connect: { id: user.id } },
      },
    });

    res.json(favoriteProduct);
  }

  public async incrementCountFavoriteProduct(req: Request, res: Response) {
    const login = req.cookies.login;
    const favorireProducts = await this.db.user.findUnique({
      where: {
        login,
        select: {
          favorireProducts: true,
        },
      },
    });
    let count = favorireProducts.find((e: any) => e.id == req.body.id);
    const favoriteProducts = await this.db.user.findUnique({
      where: {
        login,
      },
      data: {
        count: ++count,
      },
    });

    res.json(favorireProducts.count);
  }

  public async decrementCountFavoriteProduct(req: Request, res: Response) {
    const login = req.cookies.login;
    const favorireProducts = await this.db.user.findUnique({
      where: {
        login,
        select: {
          favorireProducts: true,
        },
      },
    });
    let count = favorireProducts.find((e: any) => e.id == req.body.id);
    if (count <= 1) return;

    const favoriteProducts = await this.db.user.findUnique({
      where: {
        login,
      },
      data: {
        count: --count,
      },
    });

    res.json(favorireProducts.count);
  }

  public async removeFavoriteProduct(req: Request, res: Response) {
    const login = req.cookies.login;

    const user = await this.db.user.findUnique({ where: { login } });
    const favoriteProduct = await this.db.favoriteProducts.delete({
      data: {
        title: req.body.title,
        user: { connect: { id: user.id } },
      },
    });

    res.json(favoriteProduct);
  }
}
