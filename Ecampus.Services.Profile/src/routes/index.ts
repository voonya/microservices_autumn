import { wrap } from 'helpers/request';
import { Router } from 'express';
import {
    ProfileManagerRoutes,
    PROFILE_MANAGER_BASE_ROUTE,
} from 'constants/enums/routes';
import { ProfileController } from 'controller';

interface InitRoutesProps {
    profileController: ProfileController;
}

const initRoutes = ({ profileController }: InitRoutesProps) => {
    const routes = Router();

    routes.get(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.GET_PROFILE,
        wrap(profileController.getById.bind(profileController)),
    );

    routes.post(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.CREATE_PROFILE,
        profileController.create.bind(profileController),
    );

    routes.delete(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.DELETE_PROFILE,
        profileController.delete.bind(profileController),
    );

    routes.put(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.UPDATE_PROFILE,
        profileController.update.bind(profileController),
    );

    return routes;
};

export { initRoutes };
