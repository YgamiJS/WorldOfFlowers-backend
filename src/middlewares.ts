import { Request, Response, NextFunction } from "express";

export function log(req: Request, res: Response, next: NextFunction) {
  console.dir(req.body);

  next();
}
