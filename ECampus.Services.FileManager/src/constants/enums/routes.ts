export const FILE_MANAGER_BASE_ROUTE = '/api/file-service';

export enum FileManagerRoutes {
    GET_FILE = '/file/:id',
    CREATE_FILE = '/file',
    DELETE_FILE = '/file/:id',
    UPDATE_FILE = '/file/:id',
    BROKE_ROUTE = '/broke',
    FIX_ROUTE = '/fix'
}
