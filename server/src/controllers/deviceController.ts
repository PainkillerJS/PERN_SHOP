import type { Response, NextFunction } from "express";

import path from "path";
import * as uuid from "uuid";

import { Device } from "../models";
import ApiError from "../error/ApiError";

import type { UploadedFile } from "express-fileupload";
import type { DeviceDto } from "../dto";
import type { RequestTypeCustom } from "../types/generics";

class DeviceController {
  async create(req: RequestTypeCustom<DeviceDto>, res: Response, next: NextFunction) {
    try {
      const { info, typeId, name, brandId, price } = req.body;
      const { img } = req.files as { img: UploadedFile };

      const fileName = `${uuid.v4()}.jpg`;

      await img?.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      return res.status(200).json(device);
    } catch (e) {
      next(ApiError.badRequest((e as Error).message));
    }
  }

  async getAll(req: RequestTypeCustom<unknown>, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      next(ApiError.badRequest((e as Error).message));
    }
  }

  async getOne(req: RequestTypeCustom<unknown>, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      next(ApiError.badRequest((e as Error).message));
    }
  }
}

export default new DeviceController();
