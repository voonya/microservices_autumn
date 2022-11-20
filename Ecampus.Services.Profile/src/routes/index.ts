import { wrap } from 'helpers/request';
import { Router } from 'express';
import {
    ProfileManagerRoutes,
    PROFILE_MANAGER_BASE_ROUTE,
} from 'constants/enums/routes';
import { ProfileController } from 'controller';
import {uploadFile} from "../middlewares/multer";

interface InitRoutesProps {
    profileController: ProfileController;
}

const initRoutes = ({ profileController }: InitRoutesProps) => {
    const routes = Router();

    routes.get(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.GET_PROFILE,
        wrap(profileController.getById.bind(profileController)),
    );

    routes.get(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.GET_PROFILE_BY_LOGIN,
        wrap(profileController.getByLogin.bind(profileController)),
    )

    routes.get(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.GET_ALL,
        wrap(profileController.getAll.bind(profileController)),
    );

    routes.post(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.CREATE_PROFILE,
        wrap(profileController.create.bind(profileController)),
    );

    routes.delete(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.DELETE_PROFILE,
        wrap(profileController.delete.bind(profileController)),
    );

    routes.patch(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.UPDATE_PROFILE_NAME,
        wrap(profileController.updateName.bind(profileController)),
    );

    routes.patch(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.UPDATE_PROFILE_PASSWORD,
        wrap(profileController.updatePassword.bind(profileController)),
    );

    routes.patch(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.UPDATE_PROFILE_ROLE,
        wrap(profileController.updateRole.bind(profileController)),
    );

    routes.patch(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.UPDATE_PROFILE_GROUP,
        wrap(profileController.updateGroup.bind(profileController)),
    );

    routes.patch(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.UPDATE_PROFILE_DEPARTMENT,
        wrap(profileController.updateDepartment.bind(profileController)),
    );

    routes.post(
        PROFILE_MANAGER_BASE_ROUTE + ProfileManagerRoutes.CREATE_PROFILE_AVATAR,
        uploadFile.single('file'),
        wrap(profileController.createAvatar.bind(profileController)),
    );

    return routes;
};

export { initRoutes };
