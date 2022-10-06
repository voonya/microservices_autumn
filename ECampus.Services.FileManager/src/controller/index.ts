import { FileController } from './file';

const initControllers = ({ fileService }) => {
    return {
        fileController: new FileController(fileService),
    };
};

export { initControllers, FileController };
