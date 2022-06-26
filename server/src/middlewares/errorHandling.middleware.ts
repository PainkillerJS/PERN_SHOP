import type { Request, Response, NextFunction, ErrorRequestHandler } from "express";

import ApiError from "../error/ApiError";

export default (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: "Непредвиденная ошибка" });
};
