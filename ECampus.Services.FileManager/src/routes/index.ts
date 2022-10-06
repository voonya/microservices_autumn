import { wrap } from 'helpers/request';
import { Router } from 'express';
import {
    FileManagerRoutes,
    FILE_MANAGER_BASE_ROUTE,
} from 'constants/enums/routes';
import { FileController } from 'controller';

interface InitRoutesProps {
    fileController: FileController;
}

const initRoutes = ({ fileController }: InitRoutesProps) => {
    const routes = Router();

    routes.get(
        FILE_MANAGER_BASE_ROUTE + FileManagerRoutes.GET_FILE,
        wrap(fileController.getById.bind(fileController)),
    );

    routes.post(
        FILE_MANAGER_BASE_ROUTE + FileManagerRoutes.CREATE_FILE,
        fileController.create.bind(fileController),
    );

    routes.delete(
        FILE_MANAGER_BASE_ROUTE + FileManagerRoutes.DELETE_FILE,
        fileController.delete.bind(fileController),
    );

    routes.put(
        FILE_MANAGER_BASE_ROUTE + FileManagerRoutes.UPDATE_FILE,
        fileController.update.bind(fileController),
    );

    return routes;
};

export { initRoutes };
