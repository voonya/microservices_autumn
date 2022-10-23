import { Request, Response } from 'express';
import { FileService } from 'services';
import { HttpStatusCode } from 'constants/enums';
import { UploadFilesRequest } from 'constants/types';

class FileController {
    private fileService: FileService;

    constructor(fileService: FileService) {
        this.fileService = fileService;
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const filepath = await this.fileService.getById(id);

        return res.sendFile(filepath);
    }

    async create(req: UploadFilesRequest, res: Response) {
        const files = await this.fileService.create(req.files);

        return res.status(HttpStatusCode.CREATED).json({
            files,
        });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const file = await this.fileService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            file,
        });
    }

    // update(req: Request, res: Response) {
    //     const { id } = req.params;

    //     const file = this.fileService.update(id);

    //     return res.status(HttpStatusCode.OK).json({
    //         file,
    //     });
    // }
}

export { FileController };
