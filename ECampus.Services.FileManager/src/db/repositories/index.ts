import { FileRepository } from './file';
import type { PrismaClient } from '@prisma/client';

const initRepositories = (prismaClient: PrismaClient) => {
    //
    return {
        fileRepository: new FileRepository(prismaClient),
    };
};

export { initRepositories, FileRepository };
