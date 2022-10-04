import { Request, Response } from 'express';
import { FileService } from 'services';
import { HttpStatusCode } from 'constants/enums';

class FileController {
    private fileService: FileService;

    constructor(fileService: FileService) {
        this.fileService = fileService;
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        const file = await this.fileService.getById(id);

        return res.status(HttpStatusCode.OK).json({
            file,
        });
    }

    create(req: Request, res: Response) {
        const file = this.fileService.create('New file');

        return res.status(HttpStatusCode.CREATED).json({
            file,
        });
    }

    delete(req: Request, res: Response) {
        const { id } = req.params;

        const file = this.fileService.delete(id);

        return res.status(HttpStatusCode.OK).json({
            file,
        });
    }

    update(req: Request, res: Response) {
        const { id } = req.params;

        const file = this.fileService.update(id);

        return res.status(HttpStatusCode.OK).json({
            file,
        });
    }
}

export { FileController };
