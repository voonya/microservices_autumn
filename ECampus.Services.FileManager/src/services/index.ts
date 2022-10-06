import { FileService } from './file';

const initServices = ({ fileRepository }) => {
    return {
        fileService: new FileService(fileRepository),
    };
};

export { initServices, FileService };
