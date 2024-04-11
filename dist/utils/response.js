"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const response = (res, normalized) => {
    res.setHeader("Powered-By", "Max");
    return res.status(normalized.statusCode).json({
        message: normalized.message,
        data: normalized.data,
    });
};
exports.response = response;
