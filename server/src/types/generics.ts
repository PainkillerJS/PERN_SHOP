import type { Request } from "express";

export type RequestTypeCustom<T, U = unknown, P = unknown> = Request<P, unknown, T, U>;
