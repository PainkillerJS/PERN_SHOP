import type { Response, NextFunction } from "express";

import { Type } from "../models";
import ApiError from "../error/ApiError";
import { TypeDto } from "../dto";

import type { RequestTypeCustom } from "../types/generics";

class TypeController {
  async create(req: RequestTypeCustom<TypeDto>, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const type = await Type.create({ name });

      return res.status(200).json(type);
    } catch (e) {
      return next(ApiError.badRequest((e as Error).message));
    }
  }
  async getAll(req: RequestTypeCustom<unknown>, res: Response, next: NextFunction) {
    try {
      const types = await Type.findAll();

      return res.status(200).json(types);
    } catch (e) {
      return next(ApiError.badRequest((e as Error).message));
    }
  }
}

export default new TypeController();
