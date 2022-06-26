import type { Request, Response, NextFunction } from "express";

import ApiError from "../error/ApiError";

class UserController {
  async registration(req: Request, res: Response) {}

  async login(req: Request, res: Response) {}

  async checkAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.query?.id) {
      return next(ApiError.badRequest("Тест"));
    }
  }
}

export default new UserController();
