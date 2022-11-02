export const PROFILE_MANAGER_BASE_ROUTE = '/api/profile';

export enum ProfileManagerRoutes {
    GET_PROFILE = '/:id',
    GET_ALL = '',
    CREATE_PROFILE = '',
    DELETE_PROFILE = '/:id',
    UPDATE_PROFILE_NAME = '/:id/name',
    UPDATE_PROFILE_PASSWORD = '/:id/password',
    UPDATE_PROFILE_ROLE = '/:id/role',
    UPDATE_PROFILE_GROUP = '/:id/group',
    UPDATE_PROFILE_DEPARTMENT = '/:id/department',
    UPDATE_PROFILE_AVATAR = '/:id/avatar',
}
