import { Request, Response, NextFunction } from "express";
import type { ApiClients } from "../../types";

export default class UserController {
  constructor(private db: ApiClients["database"]) {}

  public async singinUser(req: Request, res: Response) {
    console.log(req.query);
    const user = await this.db.user.findFirst({
      where: {
        login: req.query.login,
        password: req.query.password,
      },
    });

    if (!user) {
      res.status(404).end("User not found");
    }

    res.json(user);
  }

  public async loginUser(req: Request, res: Response) {
    const user = await this.db.user.create({
      data: {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password,
      },
    });

    if (!user) {
      res.status(409).end("User already exists");
    }

    res.cookie("login", user.login, { maxAge: 2592e9, httpOnly: true });
    res.json(user);
  }
}
