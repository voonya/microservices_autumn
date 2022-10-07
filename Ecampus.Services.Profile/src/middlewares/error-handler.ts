import type { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from 'constants/enums';
import { HttpError } from 'exceptions';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
): Response<any, Record<string, any>> => {
    if (!err) {
        next();
    }

    console.error(err);

    if (err instanceof HttpError) {
        return res.status(err.status).json({
            error: err.message,
        });
    }

    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        error: 'Internal sever error!',
    });
};
