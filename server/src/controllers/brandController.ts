import type { Response, NextFunction } from "express";

import { Brand } from "../models";

import type { RequestTypeCustom } from "../types/generics";
import type { BrandDto } from "../dto";

class BrandController {
  async create(req: RequestTypeCustom<BrandDto>, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const brand = await Brand.create({ name });

      return res.status(200).json(brand);
    } catch (e) {
      next((e as Error).message);
    }
  }

  async getAll(req: RequestTypeCustom<unknown>, res: Response, next: NextFunction) {
    try {
      const brands = await Brand.findAll();

      return res.status(200).json(brands);
    } catch (e) {
      next((e as Error).message);
    }
  }
}

export default new BrandController();
