import { Request, Response, NextFunction } from "express";
import { validateToken } from "../../utils/jwt";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization");
  if (!token) return res.status(403).send("Access denied");

  const payload = await validateToken(token);
  if (!payload) return res.status(403).send("Access denied");

  next();
};
