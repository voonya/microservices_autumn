import { IFileUpload } from 'constants/types/upload-file';

declare global {
    namespace Express {
        export interface Request {
            file?: IFileUpload
        }
    }
}