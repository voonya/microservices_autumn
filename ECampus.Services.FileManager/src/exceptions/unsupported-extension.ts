import { HttpError } from './http-error';
import { HttpStatusCode } from 'constants/enums';

class UnsupportedFileExtension extends HttpError {
    constructor() {
        super({
            status: HttpStatusCode.BAD_REQUEST,
            message: 'Unsupported file extension!',
        });
    }
}

export { UnsupportedFileExtension };
