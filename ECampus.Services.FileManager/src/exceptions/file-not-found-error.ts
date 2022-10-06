import { HttpError } from './http-error';
import { HttpStatusCode } from 'constants/enums';

class FileNotFoundError extends HttpError {
    constructor() {
        super({
            status: HttpStatusCode.NOT_FOUND,
            message: 'File was not found!',
        });
    }
}

export { FileNotFoundError };
