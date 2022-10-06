import { FileRepository } from './file';

const initRepositories = () => {
    //{ fileDB }
    return {
        fileRepository: new FileRepository(),
    };
};

export { initRepositories, FileRepository };
