import { Request, Response, NextFunction } from "express";
import { validateToken } from "../../utils/jwt";
import { newError } from "../errorHandler/errorMiddleware";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization");
    if (!token) return next(newError(403, "Access denied"));

    const payload = await validateToken(token);
    res.locals.payload = payload
    if (!payload) return next(newError(403, "Access denied"));

    next();
  } catch (err: any) {
    next(newError(403, err.message));
  }
};
