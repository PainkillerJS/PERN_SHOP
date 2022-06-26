import type { Request } from "express";

export type RequestTypeCustom<T, U = unknown> = Request<unknown, unknown, T, U>;
