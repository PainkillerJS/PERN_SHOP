import type { Response, NextFunction } from "express";

import path from "path";
import * as uuid from "uuid";

import { Device, DeviceInfo } from "../models";
import ApiError from "../error/ApiError";

import type { UploadedFile } from "express-fileupload";
import type { DeviceDto } from "../dto";
import type { RequestTypeCustom } from "../types/generics";

class DeviceController {
  async create(req: RequestTypeCustom<DeviceDto>, res: Response, next: NextFunction) {
    try {
      let { infos, typeId, name, brandId, price } = req.body;
      const { img } = req.files as { img: UploadedFile };

      const fileName = `${uuid.v4()}.jpg`;

      await img?.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      if (infos) {
        infos = JSON.parse(infos as unknown as string);
        infos.forEach((info) => {
          DeviceInfo.create({
            title: info.title,
            description: info.description,
            // @ts-ignore
            deviceId: device?.id as number
          });
        });
      }

      return res.status(200).json(device);
    } catch (e) {
      next(ApiError.badRequest((e as Error).message));
    }
  }

  async getAll(
    req: RequestTypeCustom<unknown, Pick<DeviceDto, "brandId" | "typeId"> & { limit: number; page: number }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { brandId, typeId, limit = 9, page = 1 } = req.query;
      const offset = page * limit - limit;

      let objFilter: Parameters<typeof Device.findAll>[0] = { limit, offset };

      switch (true) {
        case brandId && !typeId: {
          Object.assign(objFilter, { where: { brandId } });
          break;
        }
        case Boolean(!brandId && typeId): {
          Object.assign(objFilter, { where: { typeId } });
          break;
        }
        case Boolean(brandId && typeId): {
          Object.assign(objFilter, { where: { typeId, brandId } });
          break;
        }
      }

      const devices = await Device.findAndCountAll(objFilter);

      return res.status(200).json(devices);
    } catch (e) {
      next(ApiError.badRequest((e as Error).message));
    }
  }

  async getOne(req: RequestTypeCustom<unknown, unknown, Pick<DeviceDto, "id">>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const device = await Device.findOne({ where: { id }, include: [{ model: DeviceInfo, as: "info" }] });

      return res.status(200).json(device);
    } catch (e) {
      next(ApiError.badRequest((e as Error).message));
    }
  }
}

export default new DeviceController();
