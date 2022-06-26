import type { Request, Response } from "express";

class UserController {
  async registration(req: Request, res: Response) {}

  async login(req: Request, res: Response) {}

  async checkAuth(req: Request, res: Response) {}
}

export default new UserController();
