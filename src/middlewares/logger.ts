import { NextFunction, Request, Response } from "express";

/**
 * Middleware qui affiche dans la console les requête reçues
 * @param req
 * @param res
 * @param next
 */
export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`[${req.method}] - ${req.path}`);
  next();
};
