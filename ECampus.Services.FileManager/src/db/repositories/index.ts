import { FileRepository } from './file';

const initRepositories = ({ fileDB }) => {
    return {
        fileRepository: new FileRepository(fileDB),
    };
};

export { initRepositories, FileRepository };
