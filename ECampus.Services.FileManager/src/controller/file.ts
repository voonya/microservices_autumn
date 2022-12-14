import { Request, Response } from 'express';
import { FileService } from 'services';
import { HttpStatusCode } from 'constants/enums';
import { UploadFilesRequest } from 'constants/types';
import { getEnv } from 'helpers';

function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

class FileController {
    private fileService: FileService;

    private isBroken = false;

    private brokeTimeoutS: number;

    constructor(fileService: FileService) {
        this.fileService = fileService;

        this.brokeTimeoutS = Number(getEnv('BROKE_TIMEOUT') || 10);
    }

    async getById(req: Request, res: Response) {

        const { id } = req.params;

        if (this.isBroken) {
            await sleep(this.brokeTimeoutS * 1000);
        }

        const filepath = await this.fileService.getById(id);

        return res.sendFile(filepath);
    }

    async create(req: UploadFilesRequest, res: Response) {
        const files = await this.fileService.create(req.files);

        if (this.isBroken) {
            await sleep(this.brokeTimeoutS * 1000);
        }

        return res.status(HttpStatusCode.CREATED).json({
            files,
        });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        if (this.isBroken) {
            await sleep(this.brokeTimeoutS * 1000);
        }

        const file = await this.fileService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            file,
        });
    }

    async brokeService(req: Request, res: Response) {
        this.isBroken = true;

        return res.status(HttpStatusCode.OK).json({ message: 'Succesfully broken' });
    }

    async fixService(req: Request, res: Response) {
        this.isBroken = false;

        return res.status(HttpStatusCode.OK).json({ message: 'Succesfully fixed' });
    }
}

export { FileController };
