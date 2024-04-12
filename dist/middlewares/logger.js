"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = void 0;
/**
 * Middleware qui affiche dans la console les requête reçues
 * @param req
 * @param res
 * @param next
 */
const requestLogger = (req, res, next) => {
    console.log(`[${req.method}] - ${req.path}`);
    next();
};
exports.requestLogger = requestLogger;
