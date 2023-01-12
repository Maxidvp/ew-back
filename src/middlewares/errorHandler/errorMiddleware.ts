import { Request, Response, NextFunction } from "express";

export let globalRes: Response;
export let globalNext: NextFunction;

export const setGlobalMiddlewares = (req: Request, res: Response, next: NextFunction) => {

  globalRes = res;
  globalNext = next;
  next();
}

export const returnError = (err: any, req: Request, res: Response, next: NextFunction) => {

  return res.status(err.statusCode || 500).send({
    error: err.message
  });
};

export const routeNotFound = (req: Request, res: Response, next: NextFunction) => {
  next(newError(404, `Requested path '${req.baseUrl}' not found`));
}

export const newError = (statusCode: number, payload: any) => {
  const newError = {
    message: payload,
    statusCode
  }
  return newError;
}
