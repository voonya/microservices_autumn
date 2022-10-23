import type { PrismaClient } from '@prisma/client';
import { File } from 'constants/types';

class FileRepository {
    private _dbClient: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this._dbClient = prismaClient;
    }

    getById(id: string) {
        return this._dbClient.file.findFirst({ where: { id } });
    }

    create(file: File) {
        return this._dbClient.file.create({
            data: file,
        });
    }

    delete(id: string) {
        this._dbClient;
        return this._dbClient.file.delete({ where: { id } });
    }
}

export { FileRepository };
