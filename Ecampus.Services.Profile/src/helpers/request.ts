import type { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from 'constants/enums';

export const wrap =
    <ResBody = unknown>(
        handler: (req?: Request, res?: Response) => Promise<ResBody>,
    ) =>
    (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void | Response<any, Record<string, any>>> =>
        handler(req, res)
            .then((result) => {
                if (!result) {
                    return res.status(HttpStatusCode.OK).json({
                        success: true,
                    });
                }

                return res;
            })
            .catch(next);
