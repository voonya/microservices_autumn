import type { NextFunction, Request, Response } from 'express';

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
            .then(() => {
                return res;
            })
            .catch(next);
